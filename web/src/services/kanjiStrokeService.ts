export interface StrokePath {
  id: string;
  d: string;
  type?: string;
}

export interface StrokeNumber {
  number: number;
  x: number;
  y: number;
}

export interface KanjiStrokeData {
  character: string;
  hex: string;
  strokeCount: number;
  strokes: StrokePath[];
  numbers: StrokeNumber[];
}

const memoryCache = new Map<string, KanjiStrokeData>();
const CACHE_PREFIX = 'kanarau_kvg_';

export function getKanjiHex(character: string): string {
  if (!character) return '';
  const codePoint = character.codePointAt(0);
  if (!codePoint) return '';
  return codePoint.toString(16).toLowerCase().padStart(5, '0');
}

export function parseKanjiVgSvg(svgText: string, character: string, hex: string): KanjiStrokeData {
  const pathRegex = /<path[^>]+d="([^"]+)"[^>]*>/g;
  const strokes: StrokePath[] = [];
  let pathMatch: RegExpExecArray | null;

  while ((pathMatch = pathRegex.exec(svgText)) !== null) {
    const fullTag = pathMatch[0];
    const d = pathMatch[1];
    const typeMatch = fullTag.match(/kvg:type="([^"]+)"/);
    const idMatch = fullTag.match(/id="([^"]+)"/);

    const id = idMatch && idMatch[1] ? idMatch[1] : `stroke-${strokes.length + 1}`;
    const type = typeMatch && typeMatch[1] ? typeMatch[1] : undefined;

    if (d) {
      strokes.push({
        id,
        type,
        d,
      });
    }
  }

  const textRegex = /<text transform="matrix\(1 0 0 1 ([\d.\-]+) ([\d.\-]+)\)">(\d+)<\/text>/g;
  const numbers: StrokeNumber[] = [];
  let textMatch: RegExpExecArray | null;

  while ((textMatch = textRegex.exec(svgText)) !== null) {
    if (textMatch[1] && textMatch[2] && textMatch[3]) {
      numbers.push({
        x: parseFloat(textMatch[1]),
        y: parseFloat(textMatch[2]),
        number: parseInt(textMatch[3], 10),
      });
    }
  }

  return {
    character,
    hex,
    strokeCount: strokes.length,
    strokes,
    numbers,
  };
}

export async function fetchKanjiStrokes(character: string): Promise<KanjiStrokeData | null> {
  if (!character) return null;
  const hex = getKanjiHex(character);
  if (!hex) return null;

  // 1. Check memory cache
  if (memoryCache.has(hex)) {
    return memoryCache.get(hex)!;
  }

  // 2. Check localStorage cache
  try {
    const stored = localStorage.getItem(CACHE_PREFIX + hex);
    if (stored) {
      const parsed: KanjiStrokeData = JSON.parse(stored);
      if (parsed && parsed.strokes && parsed.strokes.length > 0) {
        memoryCache.set(hex, parsed);
        return parsed;
      }
    }
  } catch {
    // Ignore storage parse errors
  }

  // 3. Fetch from jsdelivr CDN
  const cdnUrl = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`;
  const fallbackUrl = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

  let svgText = '';
  try {
    const res = await fetch(cdnUrl);
    if (res.ok) {
      svgText = await res.text();
    } else {
      const fbRes = await fetch(fallbackUrl);
      if (fbRes.ok) {
        svgText = await fbRes.text();
      }
    }
  } catch {
    try {
      const fbRes = await fetch(fallbackUrl);
      if (fbRes.ok) {
        svgText = await fbRes.text();
      }
    } catch {
      return null;
    }
  }

  if (!svgText) return null;

  const data = parseKanjiVgSvg(svgText, character, hex);
  if (data.strokes.length > 0) {
    memoryCache.set(hex, data);
    try {
      localStorage.setItem(CACHE_PREFIX + hex, JSON.stringify(data));
    } catch {
      // Storage full or unavailable
    }
    return data;
  }

  return null;
}

export function getStrokeTypeName(type?: string): string {
  if (!type) return '';
  const cleanType = type.replace(/[a-z]/g, '');
  const typeMap: Record<string, string> = {
    '㇐': 'Garis Datar (Yoko)',
    '㇑': 'Garis Tegak (Tate)',
    '㇒': 'Sapuan Kiri (Hidari-harai)',
    '㇏': 'Sapuan Kanan (Migi-harai)',
    '㇔': 'Titik (Ten)',
    '㇕': 'Belok Kanan-Bawah (Yoko-ore)',
    '㇆': 'Kait (Hane)',
    '㇗': 'Belok Tegak-Kanan (Tate-ore)',
    '㇖': 'Kait Datar',
    '㇈': 'Kait Lengkung',
    '㇇': 'Garis Miring',
  };
  return typeMap[cleanType] || typeMap[type] || `Tipe ${type}`;
}
