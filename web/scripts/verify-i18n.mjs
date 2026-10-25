import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('.', import.meta.url).pathname, '..', 'src');
const localeFiles = [
  'locales/translations.ts',
  'locales/moduleTranslations.ts',
  'locales/bunpoTranslations.ts',
  'locales/dokkaiTranslations.ts',
  'locales/choukaiTranslations.ts',
  'locales/vocabularyTranslations.ts',
];

const forbiddenIndonesian = /\b(?:yang|dan|untuk|dengan|dari|adalah|pada|atau|sudah|belum|pilih|pilihan|selesai|tampilkan|cari|kata|kosakata|bahasa|membaca|mendengar|soal|jawaban|terjemahan|kembali|mulai|tutup|simpan|batal|hari|menit|pengguna|admin|feedback|target|nama|password)\b/i;
const errors = [];

for (const relative of localeFiles) {
  const file = path.join(root, relative);
  const source = fs.readFileSync(file, 'utf8');
  const languageCount = (source.match(/(?:['"]my['"]|\bmy)\s*:/g) || []).length;
  if (languageCount === 0) errors.push(`${relative}: no Myanmar entries found`);

  const lines = source.split(/\r?\n/);
  lines.forEach((line, index) => {
    const myValue = line.match(/(?:['"]my['"]|\bmy)\s*:\s*['"`]([^'"`]*)/);
    if (myValue && forbiddenIndonesian.test(myValue[1])) {
      errors.push(`${relative}:${index + 1}: likely Indonesian text in Myanmar translation`);
    }
  });
}

const translationSource = fs.readFileSync(path.join(root, 'locales/translations.ts'), 'utf8');
for (const key of ['id', 'en', 'my']) {
  if (!new RegExp(`\\b${key}\\s*:`).test(translationSource)) {
    errors.push(`locales/translations.ts: missing top-level ${key} locale`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('i18n audit passed: locale blocks exist and no obvious Indonesian leakage was found in Myanmar entries.');
