-- Migration V11: Add user roles and user feedback table for Admin Dashboard

ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(20) DEFAULT 'USER' NOT NULL;
UPDATE users SET role = 'ADMIN' WHERE email = 'muhamad.krisnandi.22@gmail.com';

CREATE TABLE IF NOT EXISTS user_feedback (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    user_email VARCHAR(255),
    user_name VARCHAR(255),
    category VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_feedback_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON user_feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_status ON user_feedback(status);

-- Seed realistic feedbacks for testing admin dashboard
INSERT INTO user_feedback (user_id, user_email, user_name, category, description, status, created_at)
VALUES 
(1, 'muhamad.krisnandi.22@gmail.com', 'Krisnandi', 'audio', 'Pengucapan suara TTS Nanami sangat jernih dan natural, sangat membantu untuk latihan choukai N2.', 'RESOLVED', CURRENT_TIMESTAMP),
(1, 'muhamad.krisnandi.22@gmail.com', 'Krisnandi', 'feature', 'Animasi stroke order untuk kanji sangat memudahkan menghafal urutan goresan.', 'RESOLVED', CURRENT_TIMESTAMP),
(NULL, 'budi.santoso@gmail.com', 'Budi Santoso', 'qna', 'Nuansa perbedaan kata antara 間隔 dan 距離 dijelaskan dengan sangat baik pada kartu.', 'REVIEWED', CURRENT_TIMESTAMP),
(NULL, 'rina.tanaka@outlook.com', 'Rina Tanaka', 'layout', 'Tampilan responsif di layar ponsel sangat nyaman saat belajar di perjalanan.', 'PENDING', CURRENT_TIMESTAMP);

-- Seed sample users for statistics overview
INSERT INTO users (email, password_hash, display_name, current_level, role, streak, total_xp, created_at)
VALUES 
('budi.santoso@gmail.com', '$2a$10$nfPYRtUfnYhvsbBRVkimUeJrfCptmfuDlvALkvN6GQiPqKrtU0QKm', 'Budi Santoso', 'N3', 'USER', 7, 450, CURRENT_TIMESTAMP),
('rina.tanaka@outlook.com', '$2a$10$nfPYRtUfnYhvsbBRVkimUeJrfCptmfuDlvALkvN6GQiPqKrtU0QKm', 'Rina Tanaka', 'N1', 'USER', 14, 980, CURRENT_TIMESTAMP),
('agus.pratama@yahoo.com', '$2a$10$nfPYRtUfnYhvsbBRVkimUeJrfCptmfuDlvALkvN6GQiPqKrtU0QKm', 'Agus Pratama', 'N4', 'USER', 2, 120, CURRENT_TIMESTAMP),
('siti.aminah@gmail.com', '$2a$10$nfPYRtUfnYhvsbBRVkimUeJrfCptmfuDlvALkvN6GQiPqKrtU0QKm', 'Siti Aminah', 'N5', 'USER', 5, 230, CURRENT_TIMESTAMP);

-- Seed sample study sessions dynamically linking to real user IDs
INSERT INTO study_sessions (user_id, deck_id, started_at, finished_at, cards_studied, cards_correct)
SELECT u.id, 1, CURRENT_TIMESTAMP - INTERVAL '1' DAY, CURRENT_TIMESTAMP - INTERVAL '1' DAY, 20, 19 FROM users u WHERE u.email = 'muhamad.krisnandi.22@gmail.com';

INSERT INTO study_sessions (user_id, deck_id, started_at, finished_at, cards_studied, cards_correct)
SELECT u.id, 2, CURRENT_TIMESTAMP - INTERVAL '2' DAY, CURRENT_TIMESTAMP - INTERVAL '2' DAY, 15, 14 FROM users u WHERE u.email = 'muhamad.krisnandi.22@gmail.com';

INSERT INTO study_sessions (user_id, deck_id, started_at, finished_at, cards_studied, cards_correct)
SELECT u.id, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 25, 22 FROM users u WHERE u.email = 'budi.santoso@gmail.com';

INSERT INTO study_sessions (user_id, deck_id, started_at, finished_at, cards_studied, cards_correct)
SELECT u.id, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 40, 38 FROM users u WHERE u.email = 'rina.tanaka@outlook.com';

INSERT INTO study_sessions (user_id, deck_id, started_at, finished_at, cards_studied, cards_correct)
SELECT u.id, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10, 8 FROM users u WHERE u.email = 'agus.pratama@yahoo.com';

INSERT INTO study_sessions (user_id, deck_id, started_at, finished_at, cards_studied, cards_correct)
SELECT u.id, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 15, 15 FROM users u WHERE u.email = 'siti.aminah@gmail.com';
