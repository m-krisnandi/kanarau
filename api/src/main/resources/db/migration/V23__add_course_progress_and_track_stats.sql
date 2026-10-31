-- V23: Add track-specific progress, course deck completion, and separate XP/streaks per track

-- 1. Relax foreign key on study_sessions so it can record course decks (1001, 2001, etc.)
ALTER TABLE study_sessions DROP CONSTRAINT IF EXISTS study_sessions_deck_id_fkey;
ALTER TABLE study_sessions ADD COLUMN IF NOT EXISTS track_code VARCHAR(20) DEFAULT 'JA';
CREATE INDEX IF NOT EXISTS idx_study_sessions_track ON study_sessions(user_id, track_code);

-- 2. Relax foreign key on user_progress so non-kotoba course cards can be recorded safely
ALTER TABLE user_progress DROP CONSTRAINT IF EXISTS user_progress_kotoba_id_fkey;

-- 3. Create course deck progress table to persistently track BIPA & Myanmar deck completion
CREATE TABLE IF NOT EXISTS course_deck_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    track_code VARCHAR(20) NOT NULL,
    deck_id BIGINT NOT NULL,
    progress_percent INT NOT NULL DEFAULT 0,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT uk_user_course_deck UNIQUE (user_id, deck_id)
);
CREATE INDEX IF NOT EXISTS idx_course_deck_progress_user ON course_deck_progress(user_id, track_code);

-- 4. Create user_track_stats table to isolate XP, streaks, and levels per language track
CREATE TABLE IF NOT EXISTS user_track_stats (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    track_code VARCHAR(20) NOT NULL,
    total_xp INT NOT NULL DEFAULT 0,
    streak INT NOT NULL DEFAULT 0,
    longest_streak INT NOT NULL DEFAULT 0,
    last_studied_date DATE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT uk_user_track UNIQUE (user_id, track_code)
);
CREATE INDEX IF NOT EXISTS idx_user_track_stats_track_xp ON user_track_stats(track_code, total_xp DESC);

-- 5. Seed initial Japanese stats for existing users from their current user table values
INSERT INTO user_track_stats (user_id, track_code, total_xp, streak, longest_streak, last_studied_date)
SELECT id, 'JA', total_xp, streak, streak, CURRENT_DATE
FROM users
ON CONFLICT (user_id, track_code) DO NOTHING;
