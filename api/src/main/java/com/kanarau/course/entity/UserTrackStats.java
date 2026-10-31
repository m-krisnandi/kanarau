package com.kanarau.course.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.Instant;

@Entity
@Table(name = "user_track_stats")
public class UserTrackStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "track_code", nullable = false)
    private String trackCode;

    @Column(name = "total_xp", nullable = false)
    private Integer totalXp = 0;

    @Column(name = "streak", nullable = false)
    private Integer streak = 0;

    @Column(name = "longest_streak", nullable = false)
    private Integer longestStreak = 0;

    @Column(name = "last_studied_date")
    private LocalDate lastStudiedDate;

    @Column(name = "updated_at")
    private Instant updatedAt;

    protected UserTrackStats() {}

    public UserTrackStats(Long userId, String trackCode) {
        this.userId = userId;
        this.trackCode = trackCode;
        this.totalXp = 0;
        this.streak = 0;
        this.longestStreak = 0;
        this.updatedAt = Instant.now();
    }

    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public String getTrackCode() { return trackCode; }
    public Integer getTotalXp() { return totalXp != null ? totalXp : 0; }
    public Integer getStreak() { return streak != null ? streak : 0; }
    public Integer getLongestStreak() { return longestStreak != null ? longestStreak : 0; }
    public LocalDate getLastStudiedDate() { return lastStudiedDate; }
    public Instant getUpdatedAt() { return updatedAt; }

    public void setTotalXp(Integer totalXp) { this.totalXp = totalXp; }
    public void addXp(int xp) { this.totalXp = (this.totalXp != null ? this.totalXp : 0) + xp; }
    public void setStreak(Integer streak) { this.streak = streak; }
    public void setLongestStreak(Integer longestStreak) { this.longestStreak = longestStreak; }
    public void setLastStudiedDate(LocalDate lastStudiedDate) { this.lastStudiedDate = lastStudiedDate; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}
