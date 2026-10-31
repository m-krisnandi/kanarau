package com.kanarau.auth.entity;

import com.kanarau.common.model.JlptLevel;
import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "display_name", nullable = false)
    private String displayName;

    @Enumerated(EnumType.STRING)
    @Column(name = "current_level", nullable = false)
    private JlptLevel currentLevel = JlptLevel.N2;

    @Column(nullable = false)
    private String role = "USER";

    @Column(nullable = false)
    private int streak = 0;

    @Column(name = "total_xp", nullable = false)
    private int totalXp = 0;

    @Column(name = "discord_username")
    private String discordUsername;

    @Column(name = "discord_webhook_url")
    private String discordWebhookUrl;

    @Column(name = "discord_notifications_enabled")
    private boolean discordNotificationsEnabled = false;

    @Column(name = "preferred_language", nullable = false)
    private String preferredLanguage = "en";

    @Column(name = "target_language", nullable = false)
    private String targetLanguage = "ja";

    @Column(name = "current_track_level", nullable = false)
    private String currentTrackLevel = "N2";

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    protected User() {}

    public User(String email, String passwordHash, String displayName) {
        this.email = email;
        this.passwordHash = passwordHash;
        this.displayName = displayName;
        this.currentLevel = JlptLevel.N2;
        this.role = "USER";
        this.streak = 0;
        this.totalXp = 0;
        this.preferredLanguage = "en";
        this.targetLanguage = "ja";
        this.currentTrackLevel = "N2";
        this.createdAt = Instant.now();
    }

    @PrePersist
    protected void onCreate() {
        if (createdAt == null) {
            createdAt = Instant.now();
        }
    }

    public Long getId() { return id; }
    public String getEmail() { return email; }
    public String getPasswordHash() { return passwordHash; }
    public String getDisplayName() { return displayName; }
    public JlptLevel getCurrentLevel() { return currentLevel; }
    public String getRole() { return role; }
    public int getStreak() { return streak; }
    public int getTotalXp() { return totalXp; }
    public String getDiscordUsername() { return discordUsername; }
    public String getDiscordWebhookUrl() { return discordWebhookUrl; }
    public boolean isDiscordNotificationsEnabled() { return discordNotificationsEnabled; }
    public String getPreferredLanguage() { return preferredLanguage != null ? preferredLanguage : "en"; }
    public String getTargetLanguage() { return targetLanguage != null ? targetLanguage : "ja"; }
    public String getCurrentTrackLevel() { return currentTrackLevel != null ? currentTrackLevel : (currentLevel != null ? currentLevel.name() : "N2"); }
    public Instant getCreatedAt() { return createdAt; }

    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }
    public void setCurrentLevel(JlptLevel currentLevel) { this.currentLevel = currentLevel; }
    public void setRole(String role) { this.role = role; }
    public void setStreak(int streak) { this.streak = streak; }
    public void setTotalXp(int totalXp) { this.totalXp = totalXp; }
    public void addXp(int xp) { this.totalXp += xp; }
    public void setDiscordUsername(String discordUsername) { this.discordUsername = discordUsername; }
    public void setDiscordWebhookUrl(String discordWebhookUrl) { this.discordWebhookUrl = discordWebhookUrl; }
    public void setDiscordNotificationsEnabled(boolean discordNotificationsEnabled) { this.discordNotificationsEnabled = discordNotificationsEnabled; }
    public void setPreferredLanguage(String preferredLanguage) { this.preferredLanguage = preferredLanguage != null ? preferredLanguage : "en"; }
    public void setTargetLanguage(String targetLanguage) { this.targetLanguage = targetLanguage != null ? targetLanguage : "ja"; }
    public void setCurrentTrackLevel(String currentTrackLevel) { this.currentTrackLevel = currentTrackLevel != null ? currentTrackLevel : "N2"; }
}
