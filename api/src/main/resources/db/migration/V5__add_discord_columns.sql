-- Add Discord integration columns to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS discord_username VARCHAR(100);
ALTER TABLE users ADD COLUMN IF NOT EXISTS discord_webhook_url VARCHAR(500);
ALTER TABLE users ADD COLUMN IF NOT EXISTS discord_notifications_enabled BOOLEAN DEFAULT FALSE;
