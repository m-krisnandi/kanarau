import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import type { JLPTLevel, Kotoba, Kanji, SearchResult } from '@/types';
import { jishoApi } from '@/services/api';
import { Search, Loader2 } from 'lucide-react';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import { useTranslation } from '@/stores/languageStore';
import { useAuthStore } from '@/stores/authStore';
import { localizeKotoba, localizeKanji } from '@/locales/vocabularyTranslations';

const KANJI_LEVEL_MAP: Record<string, JLPTLevel> = {
  '幼': 'N2', '屋': 'N2', '根': 'N2', '訂': 'N2', '正': 'N2',
  '誤': 'N2', '重': 'N2', '満': 'N2', '求': 'N2', '間': 'N2',
  '隔': 'N2', '焦': 'N2', '防': 'N2', '止': 'N2', '煙': 'N2',
  '部': 'N2', '歩': 'N2', '出': 'N2', '産': 'N2', '帯': 'N2',
  '瞬': 'N2', '知': 'N2', '短': 'N2', '長': 'N2', '区': 'N2',
  '別': 'N2', '煮': 'N2', '込': 'N2',
};

function getKanjiLevel(kanji: Kanji): JLPTLevel {
  if (kanji.jlpt_level) return kanji.jlpt_level;
  const lvl = KANJI_LEVEL_MAP[kanji.character];
  if (lvl) return lvl;
  const idNum = Number(kanji.id);
  if ((idNum >= 1001 && idNum <= 1050) || (idNum >= 601 && idNum <= 655) || (idNum >= 501 && idNum <= 510)) return 'N5';
  if ((idNum >= 701 && idNum <= 720) || (idNum >= 401 && idNum <= 410)) return 'N4';
  if ((idNum >= 751 && idNum <= 760) || (idNum >= 301 && idNum <= 310)) return 'N3';
  if ((idNum >= 761 && idNum <= 770) || (idNum >= 1 && idNum <= 25)) return 'N2';
  return 'N2';
}

const PAGE_SIZE = 40;

export const JishoPage: React.FC = () => {
  const { t, language } = useTranslation();
  const currentGlobalLevel = useAuthStore((state) => (state.currentLevel || state.user?.current_level || 'N2') as JLPTLevel);
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'all'>(currentGlobalLevel);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeKotoba, setActiveKotoba] = useState<Kotoba | null>(null);
  const [activeKanjiChar, setActiveKanjiChar] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'kotoba' | 'kanji'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  // In-memory cache for ultra-fast instant switching between levels & queries
  const cacheRef = useRef<Record<string, SearchResult[]>>({});

  // Sync with global level dropdown when changed from Topbar
  useEffect(() => {
    if (currentGlobalLevel) {
      setSelectedLevel(currentGlobalLevel);
    }
  }, [currentGlobalLevel]);

  const fetchResults = useCallback(async (q: string, lang: string, lvl: JLPTLevel | 'all') => {
    const cacheKey = `${q.trim()}_${lang}_${lvl}`;
    if (cacheRef.current[cacheKey]) {
      setResults(cacheRef.current[cacheKey]);
      return;
    }

    setLoading(true);
    try {
      const res = await jishoApi.search(q, lang, lvl);
      const data = res.data || [];
      cacheRef.current[cacheKey] = data;
      setResults(data);
    } catch (err) {
      console.error('Error searching', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch when query, language, or selectedLevel changes
  useEffect(() => {
    fetchResults(query, language, selectedLevel);
  }, [query, language, selectedLevel, fetchResults]);

  // Reset visible count whenever filters change so DOM renders instantly
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedLevel, filterType, query]);

  const handleSearch = (val: string) => {
    setQuery(val);
  };

  const filteredResults = useMemo(() => {
    return results.filter((r) => {
      // 1. Filter by item type (All / Kotoba / Kanji)
      if (filterType !== 'all' && r.type !== filterType) {
        return false;
      }

      // 2. Filter by JLPT level (client-side guarantee)
      if (selectedLevel !== 'all') {
        if (r.type === 'kotoba') {
          const rawK = r.item as Kotoba;
          if (rawK.jlpt_level && rawK.jlpt_level !== selectedLevel) {
            return false;
          }
        } else if (r.type === 'kanji') {
          const rawKanji = r.item as Kanji;
          const kanjiLevel = getKanjiLevel(rawKanji);
          if (kanjiLevel !== selectedLevel) {
            return false;
          }
        }
      }

      return true;
    });
  }, [results, filterType, selectedLevel]);

  const displayedResults = useMemo(() => {
    return filteredResults.slice(0, visibleCount);
  }, [filteredResults, visibleCount]);

  const remainingCount = filteredResults.length - visibleCount;

  return (
    <div className="space-y-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="pt-1 text-center">
        <h1 className="text-xl font-bold text-[#1E1B18] tracking-tight">{t.jisho.title}</h1>
        <p className="text-xs text-[#78716C] mt-0.5">{t.jisho.subtitle}</p>
      </div>

      {/* Level Filter Pills: Semua | N5 | N4 | N3 | N2 | N1 */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        {(['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => {
          const isSelected = selectedLevel === lvl;
          return (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {lvl === 'all' ? t.jisho.all : lvl}
            </button>
          );
        })}
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={t.jisho.placeholder}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EFEAE2] rounded-xl text-sm focus:outline-hidden focus:border-indigo-500 shadow-xs placeholder:text-[#A8A29E] font-jp"
        />
        <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-3.5" />
        {loading && (
          <Loader2 className="w-4 h-4 text-indigo-500 absolute right-3.5 top-3.5 animate-spin" />
        )}
      </div>

      {/* Type Filter Buttons (Semua / Kotoba / Kanji) */}
      <div className="flex bg-[#EFEAE2] p-1 rounded-xl">
        <button
          onClick={() => setFilterType('all')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            filterType === 'all' ? 'bg-white text-[#1E1B18] shadow-xs' : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          {t.jisho.all}
        </button>
        <button
          onClick={() => setFilterType('kotoba')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            filterType === 'kotoba' ? 'bg-white text-[#1E1B18] shadow-xs' : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          {t.jisho.kotobaTab}
        </button>
        <button
          onClick={() => setFilterType('kanji')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            filterType === 'kanji' ? 'bg-white text-[#1E1B18] shadow-xs' : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          {t.jisho.kanjiTab}
        </button>
      </div>

      {/* Results Count Info */}
      <div className="flex items-center justify-between text-xs text-[#78716C] px-1">
        <span>{t.jisho.resultsFound(filteredResults.length)}</span>
        {selectedLevel !== 'all' && (
          <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
            JLPT {selectedLevel}
          </span>
        )}
      </div>

      {/* Results List */}
      <div className="space-y-2">
        {filteredResults.length === 0 ? (
          <div className="text-center py-12 text-[#A8A29E] bg-white/50 rounded-2xl border border-dashed border-[#EFEAE2]">
            <p className="text-sm font-medium">{t.jisho.noResults}</p>
            <p className="text-xs mt-1 text-stone-400">
              {selectedLevel !== 'all'
                ? t.jisho.noResultsLevelHint
                : t.jisho.noResultsGeneralHint}
            </p>
          </div>
        ) : (
          displayedResults.map((item, idx) => {
            if (item.type === 'kotoba') {
              const rawK = item.item as Kotoba;
              const k = localizeKotoba(rawK, language);
              return (
                <div key={'kotoba_' + k.id + '_' + idx}
                  onClick={() => setActiveKotoba(k)}
                  className="card-washi card-washi-hover rounded-xl p-3.5 cursor-pointer flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-jp font-bold text-base text-[#1E1B18] group-hover:text-indigo-600 transition-colors">
                        {k.kanji || k.hiragana}
                      </span>
                      {k.kanji && (
                        <span className="font-jp text-xs text-indigo-600 font-medium">
                          {k.hiragana}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#57534E] line-clamp-1">{k.meaning}</p>
                  </div>

                  <div className="flex items-center space-x-1.5 shrink-0">
                    {rawK.jlpt_level && (
                      <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-full border border-indigo-100">
                        {rawK.jlpt_level}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-[#78716C] bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#EFEAE2]">
                      {t.jisho.kotobaTab}
                    </span>
                  </div>
                </div>
              );
            } else {
              const rawK = item.item as Kanji;
              const k = localizeKanji(rawK, language);
              const kanjiLvl = getKanjiLevel(rawK);
              return (
                <div key={'kanji_' + k.id + '_' + idx}
                  onClick={() => setActiveKanjiChar(k.character)}
                  className="card-washi card-washi-hover rounded-xl p-3.5 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-center justify-center font-jp font-bold text-2xl text-emerald-950 group-hover:scale-105 transition-transform">
                      {k.character}
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-xs text-[#1E1B18] group-hover:text-emerald-800 transition-colors">
                        {k.meanings.join(', ')}
                      </h3>
                      <p className="text-[11px] text-[#78716C] font-jp">
                        On: {k.on_readings.join(', ') || '-'} &bull; Kun: {k.kun_readings.join(', ') || '-'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 shrink-0">
                    <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                      {kanjiLvl}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {t.jisho.kanjiTab}
                    </span>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>

      {/* Pagination Load More Button */}
      {remainingCount > 0 && (
        <div className="pt-2 pb-4 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="w-full py-2.5 px-4 bg-white hover:bg-stone-50 active:bg-stone-100 border border-stone-200 text-stone-700 hover:text-indigo-600 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <span>
              {t.jisho.loadMore
                ? t.jisho.loadMore(remainingCount)
                : `Tampilkan ${remainingCount} hasil lainnya`}
            </span>
          </button>
        </div>
      )}

      {/* Kotoba Modal */}
      {activeKotoba && (
        <KotobaDetailModal
          kotoba={activeKotoba}
          onClose={() => setActiveKotoba(null)}
          onViewKanji={(char: string) => {
            setActiveKotoba(null);
            setActiveKanjiChar(char);
          }}
        />
      )}

      {/* Kanji Modal */}
      {activeKanjiChar && (
        <KanjiDetailView
          character={activeKanjiChar}
          onClose={() => setActiveKanjiChar(null)}
          onSelectKotoba={(kotoba) => {
            setActiveKanjiChar(null);
            setActiveKotoba(kotoba);
          }}
        />
      )}
    </div>
  );
};
