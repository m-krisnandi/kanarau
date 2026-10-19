-- Kanarau Schema V1
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    current_level VARCHAR(10) NOT NULL DEFAULT 'N2',
    streak INT NOT NULL DEFAULT 1,
    total_xp INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS decks (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level VARCHAR(10) NOT NULL,
    day_number INT NOT NULL,
    kotoba_count INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS kanji (
    id BIGSERIAL PRIMARY KEY,
    character VARCHAR(10) NOT NULL UNIQUE,
    meaning VARCHAR(255) NOT NULL,
    on_reading VARCHAR(255),
    kun_reading VARCHAR(255),
    radical VARCHAR(20),
    radical_meaning VARCHAR(255),
    stroke_count INT,
    grade INT
);

CREATE TABLE IF NOT EXISTS kotoba (
    id BIGSERIAL PRIMARY KEY,
    kanji VARCHAR(100),
    hiragana VARCHAR(100) NOT NULL,
    meaning_id TEXT NOT NULL,
    meaning_en TEXT,
    notes TEXT,
    example_sentence TEXT,
    example_translation TEXT,
    level VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS kotoba_kanji (
    kotoba_id BIGINT NOT NULL REFERENCES kotoba(id) ON DELETE CASCADE,
    kanji_id BIGINT NOT NULL REFERENCES kanji(id) ON DELETE CASCADE,
    PRIMARY KEY (kotoba_id, kanji_id)
);

CREATE TABLE IF NOT EXISTS deck_kotoba (
    id BIGSERIAL PRIMARY KEY,
    deck_id BIGINT NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
    kotoba_id BIGINT NOT NULL REFERENCES kotoba(id) ON DELETE CASCADE,
    sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS user_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kotoba_id BIGINT NOT NULL REFERENCES kotoba(id) ON DELETE CASCADE,
    direction VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'NEW',
    ease_factor DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    interval_days DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    next_review TIMESTAMP WITH TIME ZONE,
    review_count INT NOT NULL DEFAULT 0,
    last_reviewed TIMESTAMP WITH TIME ZONE,
    CONSTRAINT uk_user_kotoba_dir UNIQUE (user_id, kotoba_id, direction)
);

CREATE TABLE IF NOT EXISTS study_sessions (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    deck_id BIGINT NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
    started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    finished_at TIMESTAMP WITH TIME ZONE,
    cards_studied INT NOT NULL DEFAULT 0,
    cards_correct INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS review_logs (
    id BIGSERIAL PRIMARY KEY,
    progress_id BIGINT NOT NULL REFERENCES user_progress(id) ON DELETE CASCADE,
    response VARCHAR(20) NOT NULL,
    response_time_ms BIGINT NOT NULL,
    reviewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_deck_level_day ON decks(level, day_number);
CREATE INDEX IF NOT EXISTS idx_kotoba_level ON kotoba(level);
CREATE INDEX IF NOT EXISTS idx_progress_due ON user_progress(user_id, next_review, status);
