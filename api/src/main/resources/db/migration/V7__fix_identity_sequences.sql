-- Ensure identity sequences start past seeded IDs for progress and session tables
ALTER TABLE user_progress ALTER COLUMN id RESTART WITH 1000;
ALTER TABLE study_sessions ALTER COLUMN id RESTART WITH 1000;
ALTER TABLE review_logs ALTER COLUMN id RESTART WITH 1000;
