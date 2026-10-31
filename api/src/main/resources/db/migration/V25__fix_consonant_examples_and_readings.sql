-- V25: Fix Myanmar consonant examples, phonetic readings, and distinct meanings

-- 1. Fix consonant 'စ' (Sa-Lon) example word to standard 'စကား' (sa-ga: Kata / Bicara)
-- Previously used 'စာအုပ်' with awkward transcription 'Sa-oke (Buku)'
UPDATE course_items
SET example_target = 'စကား',
    example_meaning_id = 'Bicara / Bahasa (sa-ga)',
    example_meaning_en = 'Language / Words / Speech (sa-ga)',
    example_meaning_my = 'စကား'
WHERE target_text = 'စ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

-- 2. Refine example meanings for consonants so that meaning is clean and romanization is clear
UPDATE course_items
SET example_meaning_id = 'Guru / Pengajar (sa-ya)',
    example_meaning_en = 'Teacher / Sir (sa-ya)'
WHERE target_text = 'ဆ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Sendok makan (zun)',
    example_meaning_en = 'Spoon (zun)'
WHERE target_text = 'ဇ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Pasar (zay)',
    example_meaning_en = 'Market (zay)'
WHERE target_text = 'ဈ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Malam hari (nya)',
    example_meaning_en = 'Night (nya)'
WHERE target_text = 'ည' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Pintu (ta-ga)',
    example_meaning_en = 'Door (ta-ga)'
WHERE target_text = 'တ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Nasi matang (hta-min)',
    example_meaning_en = 'Cooked rice (hta-min)'
WHERE target_text = 'ထ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Koin / Uang logam (din-ga)',
    example_meaning_en = 'Coin (din-ga)'
WHERE target_text = 'ဒ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Ajaran Kebajikan / Dharma (dham-ma)',
    example_meaning_en = 'Dharma / Teachings (dham-ma)'
WHERE target_text = 'ဓ' AND track_code = 'MY' AND level_code = 'FOUNDATION';

UPDATE course_items
SET example_meaning_id = 'Nama (na-me)',
    example_meaning_en = 'Name (na-me)'
WHERE target_text = 'န' AND track_code = 'MY' AND level_code = 'FOUNDATION';
