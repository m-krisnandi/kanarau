-- Migration V19: Create dedicated admin user and demote personal user account

-- Demote personal user account from admin to normal user
UPDATE users SET role = 'USER' WHERE email = 'muhamad.krisnandi.22@gmail.com';

-- Insert or update dedicated 'admin' account (password: JCz9654hP7NP)
INSERT INTO users (email, password_hash, display_name, current_level, role, streak, total_xp, created_at)
SELECT 'admin', '$2a$10$FCOoGU9cVc6qSZ8L1feRFeckC0KIAFawwUG5cyq2NSBA2RpkK0pwi', 'Administrator', 'N1', 'ADMIN', 30, 9999, CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'admin');

UPDATE users 
SET password_hash = '$2a$10$FCOoGU9cVc6qSZ8L1feRFeckC0KIAFawwUG5cyq2NSBA2RpkK0pwi', role = 'ADMIN'
WHERE email = 'admin';

-- Insert or update admin@kanarau.com alias for standard email compatibility
INSERT INTO users (email, password_hash, display_name, current_level, role, streak, total_xp, created_at)
SELECT 'admin@kanarau.com', '$2a$10$FCOoGU9cVc6qSZ8L1feRFeckC0KIAFawwUG5cyq2NSBA2RpkK0pwi', 'Administrator', 'N1', 'ADMIN', 30, 9999, CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'admin@kanarau.com');

UPDATE users 
SET password_hash = '$2a$10$FCOoGU9cVc6qSZ8L1feRFeckC0KIAFawwUG5cyq2NSBA2RpkK0pwi', role = 'ADMIN'
WHERE email = 'admin@kanarau.com';
