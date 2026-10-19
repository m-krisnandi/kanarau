-- Fix password hash for default user Krisnandi (JadiginiH3h3)
UPDATE users 
SET password_hash = '$2a$10$nfPYRtUfnYhvsbBRVkimUeJrfCptmfuDlvALkvN6GQiPqKrtU0QKm'
WHERE email = 'muhamad.krisnandi.22@gmail.com';

-- Ensure identity sequences start past seeded IDs
ALTER TABLE users ALTER COLUMN id RESTART WITH 100;
ALTER TABLE decks ALTER COLUMN id RESTART WITH 200;
ALTER TABLE kotoba ALTER COLUMN id RESTART WITH 500;
