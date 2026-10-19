-- Fix password hash for default user Krisnandi (JadiginiH3h3)
UPDATE users 
SET password_hash = '$2a$10$nfPYRtUfnYhvsbBRVkimUeJrfCptmfuDlvALkvN6GQiPqKrtU0QKm'
WHERE email = 'muhamad.krisnandi.22@gmail.com';

-- Ensure identity sequences start past seeded IDs
SELECT setval(pg_get_serial_sequence('users', 'id'), GREATEST(100, COALESCE((SELECT MAX(id) FROM users), 0)));
SELECT setval(pg_get_serial_sequence('decks', 'id'), GREATEST(200, COALESCE((SELECT MAX(id) FROM decks), 0)));
SELECT setval(pg_get_serial_sequence('kotoba', 'id'), GREATEST(500, COALESCE((SELECT MAX(id) FROM kotoba), 0)));
