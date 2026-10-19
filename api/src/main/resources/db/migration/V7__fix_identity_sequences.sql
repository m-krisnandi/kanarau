-- Ensure identity sequences start past seeded IDs for progress and session tables
SELECT setval(pg_get_serial_sequence('user_progress', 'id'), GREATEST(1000, COALESCE((SELECT MAX(id) FROM user_progress), 0)));
SELECT setval(pg_get_serial_sequence('study_sessions', 'id'), GREATEST(1000, COALESCE((SELECT MAX(id) FROM study_sessions), 0)));
SELECT setval(pg_get_serial_sequence('review_logs', 'id'), GREATEST(1000, COALESCE((SELECT MAX(id) FROM review_logs), 0)));
