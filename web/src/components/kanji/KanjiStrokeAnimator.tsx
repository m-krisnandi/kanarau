import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  fetchKanjiStrokes,
  getStrokeTypeName,
  type KanjiStrokeData,
} from '@/services/kanjiStrokeService';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Hash,
  Sparkles,
  Type,
  RefreshCw,
} from 'lucide-react';
import { useTranslation } from '@/stores/languageStore';

interface Props {
  character: string;
  fallbackStrokeCount?: number;
  onStrokeCountDetected?: (count: number) => void;
  className?: string;
}

export const KanjiStrokeAnimator: React.FC<Props> = ({
  character,
  fallbackStrokeCount = 0,
  onStrokeCountDetected,
  className = '',
}) => {
  const { t } = useTranslation();
  const [data, setData] = useState<KanjiStrokeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [viewMode, setViewMode] = useState<'anim' | 'font'>('anim');

  // Animation state
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<number>(1);
  const [showNumbers, setShowNumbers] = useState(true);

  // Active stroke drawing progress (0 to 1)
  const [activeProgress, setActiveProgress] = useState(1);
  const activePathRef = useRef<SVGPathElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const loadStrokes = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await fetchKanjiStrokes(character);
      if (result && result.strokes.length > 0) {
        setData(result);
        setCurrentStep(result.strokeCount);
        setActiveProgress(1);
        if (onStrokeCountDetected) {
          onStrokeCountDetected(result.strokeCount);
        }
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [character, onStrokeCountDetected]);

  useEffect(() => {
    loadStrokes();
  }, [loadStrokes]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Animation player loop
  const animateStroke = useCallback(
    (step: number, total: number, playbackSpeed: number) => {
      if (!isPlayingRef.current) return;

      const duration = 650 / playbackSpeed;
      const startTime = performance.now();
      setActiveProgress(0);

      const loop = (now: number) => {
        if (!isPlayingRef.current) return;
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        setActiveProgress(progress);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(loop);
        } else {
          // Finished this stroke, wait a moment then advance
          setTimeout(() => {
            if (!isPlayingRef.current) return;
            if (step < total) {
              const nextStep = step + 1;
              setCurrentStep(nextStep);
              animateStroke(nextStep, total, playbackSpeed);
            } else {
              // Completed all strokes
              setIsPlaying(false);
              setActiveProgress(1);
            }
          }, 200 / playbackSpeed);
        }
      };

      animFrameRef.current = requestAnimationFrame(loop);
    },
    []
  );

  const handlePlayToggle = () => {
    if (!data || data.strokes.length === 0) return;

    if (isPlaying) {
      setIsPlaying(false);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      setActiveProgress(1);
    } else {
      setIsPlaying(true);
      let startStep = currentStep;
      if (currentStep >= data.strokeCount) {
        startStep = 1;
        setCurrentStep(1);
      }
      isPlayingRef.current = true;
      animateStroke(startStep, data.strokeCount, speed);
    }
  };

  const handleReplay = () => {
    if (!data) return;
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setCurrentStep(1);
    setIsPlaying(true);
    isPlayingRef.current = true;
    animateStroke(1, data.strokeCount, speed);
  };

  const handleStepPrev = () => {
    setIsPlaying(false);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setActiveProgress(1);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleStepNext = () => {
    if (!data) return;
    setIsPlaying(false);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setActiveProgress(1);
    setCurrentStep((prev) => Math.min(data.strokeCount, prev + 1));
  };

  const handleSelectStep = (step: number) => {
    setIsPlaying(false);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setCurrentStep(step);
    setActiveProgress(1);
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.5, 2, 0.75];
    const currentIndex = speeds.indexOf(speed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length] ?? 1;
    setSpeed(nextSpeed);
  };

  const totalStrokes = data ? data.strokeCount : fallbackStrokeCount;
  const activeStroke =
    data && currentStep >= 1 && currentStep <= data.strokes.length
      ? data.strokes[currentStep - 1]
      : null;
  const currentStrokeType = activeStroke?.type
    ? getStrokeTypeName(activeStroke.type)
    : '';

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Top View Mode Switcher */}
      <div className="flex items-center space-x-1.5 p-1 bg-stone-100 dark:bg-[#1E293B] rounded-lg mb-3">
        <button
          type="button"
          onClick={() => setViewMode('anim')}
          className={`flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
            viewMode === 'anim'
              ? 'bg-white dark:bg-[#0F172A] text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.kanjiDetail.strokeAnimation}</span>
        </button>
        <button
          type="button"
          onClick={() => setViewMode('font')}
          className={`flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
            viewMode === 'font'
              ? 'bg-white dark:bg-[#0F172A] text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>{t.kanjiDetail.characterView}</span>
        </button>
      </div>

      {/* Main Kanji Display Box */}
      <div className="relative w-40 h-40 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl border-2 border-stone-200 dark:border-stone-700/80 flex items-center justify-center shadow-inner overflow-hidden">
        {/* Practice Grid Lines */}
        <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-stone-300/80 dark:border-stone-700/80 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-stone-300/80 dark:border-stone-700/80 pointer-events-none" />

        {/* Content depending on mode and state */}
        {viewMode === 'font' ? (
          <span className="text-7xl font-bold font-jp text-stone-900 dark:text-white select-none z-10 animate-fade-in">
            {character}
          </span>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center p-4 text-center z-10">
            <RefreshCw className="w-6 h-6 text-indigo-500 animate-spin mb-2" />
            <span className="text-xs text-stone-500 dark:text-zinc-400">
              {t.kanjiDetail.loadingStrokes}
            </span>
          </div>
        ) : error || !data ? (
          <div className="flex flex-col items-center justify-center p-3 text-center z-10">
            <span className="text-5xl font-bold font-jp text-stone-900 dark:text-white select-none mb-1">
              {character}
            </span>
            <p className="text-[11px] text-stone-500 dark:text-zinc-400 mb-2">
              {t.kanjiDetail.strokeLoadFailed}
            </p>
            <button
              type="button"
              onClick={loadStrokes}
              className="px-2.5 py-1 text-xs bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition-colors cursor-pointer"
            >
              {t.kanjiDetail.retry}
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full p-2 z-10 flex items-center justify-center">
            <svg
              viewBox="0 0 109 109"
              className="w-full h-full select-none"
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            >
              {/* Ghost outline of full kanji for guidance */}
              <g
                className="stroke-stone-200 dark:stroke-stone-800"
                style={{
                  fill: 'none',
                  strokeWidth: 3.2,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  opacity: 0.6,
                }}
              >
                {data.strokes.map((s, idx) => (
                  <path key={`ghost-${idx}`} d={s.d} />
                ))}
              </g>

              {/* Completed strokes */}
              <g
                className="stroke-stone-900 dark:stroke-stone-100"
                style={{
                  fill: 'none',
                  strokeWidth: 4,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                {data.strokes.slice(0, currentStep - 1).map((s, idx) => (
                  <path key={`completed-${idx}`} d={s.d} />
                ))}
              </g>

              {/* Current active stroke */}
              {activeStroke && (
                <path
                  ref={activePathRef}
                  d={activeStroke.d}
                  className="stroke-indigo-600 dark:stroke-indigo-400"
                  style={{
                    fill: 'none',
                    strokeWidth: 4.5,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: isPlaying ? '300' : 'none',
                    strokeDashoffset: isPlaying ? (1 - activeProgress) * 300 : '0',
                    transition: isPlaying ? 'none' : 'stroke-dashoffset 0.2s ease',
                  }}
                />
              )}

              {/* Stroke Order Numbers */}
              {showNumbers && (
                <g style={{ fontSize: '7.5px', fontWeight: 'bold' }}>
                  {data.numbers.slice(0, currentStep).map((num) => {
                    const isLatest = num.number === currentStep;
                    return (
                      <text
                        key={`num-${num.number}`}
                        x={num.x}
                        y={num.y}
                        className={
                          isLatest
                            ? 'fill-indigo-600 dark:fill-indigo-300 font-extrabold'
                            : 'fill-stone-400 dark:fill-zinc-500'
                        }
                      >
                        {num.number}
                      </text>
                    );
                  })}
                </g>
              )}
            </svg>
          </div>
        )}
      </div>

      {/* Animation Controls Toolbar (Only shown in Animation Mode when data is available) */}
      {viewMode === 'anim' && data && (
        <div className="w-full mt-3 space-y-2">
          {/* Status & Stroke Details */}
          <div className="flex items-center justify-between text-xs px-1">
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              {t.kanjiDetail.stepProgress(currentStep, totalStrokes)}
            </span>
            {currentStrokeType && (
              <span className="text-[11px] text-stone-500 dark:text-zinc-400 truncate max-w-[180px]">
                {currentStrokeType}
              </span>
            )}
          </div>

          {/* Player Button Controls */}
          <div className="flex items-center justify-between bg-stone-50 dark:bg-[#0F172A] border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2">
            {/* Step Back */}
            <button
              type="button"
              onClick={handleStepPrev}
              disabled={currentStep <= 1}
              title={t.kanjiDetail.prevStroke}
              className="p-1.5 rounded-lg text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-[#1E293B] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={handlePlayToggle}
              title={isPlaying ? t.kanjiDetail.pause : t.kanjiDetail.play}
              className="flex items-center space-x-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-xs shadow-xs transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>{t.kanjiDetail.pause}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t.kanjiDetail.play}</span>
                </>
              )}
            </button>

            {/* Replay */}
            <button
              type="button"
              onClick={handleReplay}
              title={t.kanjiDetail.replay}
              className="p-1.5 rounded-lg text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Step Next */}
            <button
              type="button"
              onClick={handleStepNext}
              disabled={currentStep >= totalStrokes}
              title={t.kanjiDetail.nextStroke}
              className="p-1.5 rounded-lg text-stone-600 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-[#1E293B] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Speed Toggle */}
            <button
              type="button"
              onClick={cycleSpeed}
              title={`${t.kanjiDetail.speed}: ${speed}x`}
              className="px-2 py-1 text-[11px] font-semibold text-stone-700 dark:text-zinc-300 bg-stone-200/70 dark:bg-[#1E293B] hover:bg-stone-300 dark:hover:bg-[#2A374F] rounded-md transition-colors cursor-pointer"
            >
              {speed}x
            </button>

            {/* Numbers Toggle */}
            <button
              type="button"
              onClick={() => setShowNumbers(!showNumbers)}
              title={t.kanjiDetail.showNumbers}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                showNumbers
                  ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                  : 'text-stone-400 dark:text-zinc-500 hover:bg-stone-200 dark:hover:bg-[#1E293B]'
              }`}
            >
              <Hash className="w-4 h-4" />
            </button>
          </div>

          {/* Step-by-Step Breakdown Carousel / Cards */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-wider block mb-1.5">
              {t.kanjiDetail.strokeOrderBreakdown}
            </span>
            <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-thin">
              {data.strokes.map((_, idx) => {
                const stepNum = idx + 1;
                const isCurrent = stepNum === currentStep;
                const stepStroke = data.strokes[stepNum - 1];
                if (!stepStroke) return null;

                return (
                  <button
                    key={`step-card-${stepNum}`}
                    type="button"
                    onClick={() => handleSelectStep(stepNum)}
                    className={`flex-shrink-0 flex flex-col items-center p-1 rounded-xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/50 shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-[#0F172A] hover:border-indigo-300'
                    }`}
                  >
                    {/* Mini SVG representation up to this stroke */}
                    <div className="w-12 h-12 relative bg-amber-50/30 dark:bg-amber-950/10 rounded-lg overflow-hidden border border-stone-100 dark:border-stone-800">
                      {/* Mini crosshairs */}
                      <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-stone-200 dark:border-stone-800" />
                      <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-stone-200 dark:border-stone-800" />

                      <svg viewBox="0 0 109 109" className="w-full h-full p-0.5">
                        {/* Completed previous strokes in dark */}
                        <g
                          className="stroke-stone-800 dark:stroke-stone-200"
                          style={{
                            fill: 'none',
                            strokeWidth: 4,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }}
                        >
                          {data.strokes.slice(0, stepNum - 1).map((s, sIdx) => (
                            <path key={`mini-prev-${sIdx}`} d={s.d} />
                          ))}
                        </g>

                        {/* Newest stroke for this step in vibrant indigo */}
                        <path
                          d={stepStroke.d}
                          className="stroke-indigo-600 dark:stroke-indigo-400"
                          style={{
                            fill: 'none',
                            strokeWidth: 4.8,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }}
                        />
                      </svg>
                    </div>

                    <span
                      className={`text-[10px] font-bold mt-1 ${
                        isCurrent
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-stone-500 dark:text-zinc-400'
                      }`}
                    >
                      {stepNum}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
