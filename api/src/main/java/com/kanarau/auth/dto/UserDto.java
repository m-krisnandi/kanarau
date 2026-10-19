package com.kanarau.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.auth.entity.User;
import com.kanarau.common.model.JlptLevel;

public record UserDto(
        Long id,
        String email,
        String name,
        String role,
        @JsonProperty("current_level") JlptLevel currentLevel,
        int streak,
        @JsonProperty("total_xp") int totalXp,
        @JsonProperty("created_at") String createdAt,
        @JsonProperty("discord_username") String discordUsername,
        @JsonProperty("discord_webhook_url") String discordWebhookUrl,
        @JsonProperty("discord_notifications_enabled") boolean discordNotificationsEnabled
) {
    public static UserDto from(User user) {
        return new UserDto(
                user.getId(),
                user.getEmail(),
                user.getDisplayName(),
                user.getRole(),
                user.getCurrentLevel(),
                user.getStreak(),
                user.getTotalXp(),
                user.getCreatedAt() != null ? user.getCreatedAt().toString() : "",
                user.getDiscordUsername(),
                user.getDiscordWebhookUrl(),
                user.isDiscordNotificationsEnabled()
        );
    }
}
