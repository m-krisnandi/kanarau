package com.kanarau.leaderboard.service;

import com.kanarau.auth.entity.User;
import com.kanarau.auth.repository.UserRepository;
import com.kanarau.leaderboard.dto.LeaderboardEntryDto;
import com.kanarau.leaderboard.dto.LeaderboardResponse;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.course.entity.UserTrackStats;
import com.kanarau.course.repository.UserTrackStatsRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class LeaderboardService {

    private final UserRepository userRepository;
    private final UserProgressRepository userProgressRepository;
    private final UserTrackStatsRepository userTrackStatsRepository;

    public LeaderboardService(
            UserRepository userRepository,
            UserProgressRepository userProgressRepository,
            UserTrackStatsRepository userTrackStatsRepository
    ) {
        this.userRepository = userRepository;
        this.userProgressRepository = userProgressRepository;
        this.userTrackStatsRepository = userTrackStatsRepository;
    }

    public static int calculateGamificationLevel(int xp) {
        if (xp <= 0) return 1;
        int[] thresholds = {0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700};
        int level = 1;
        while (level < thresholds.length && xp >= thresholds[level]) {
            level++;
        }
        if (level >= 10 && xp >= thresholds[9]) {
            level = 10 + (xp - thresholds[9]) / 600;
        }
        return level;
    }

    public static String getLevelTitle(int level) {
        return switch (Math.min(level, 10)) {
            case 1 -> "Pemula";
            case 2 -> "Pejuang Kana";
            case 3 -> "Penjelajah Kanji";
            case 4 -> "Ahli Kosakata";
            case 5 -> "Pendekar JLPT";
            case 6 -> "Pakar Tatabahasa";
            case 7 -> "Penguasa Dokkai";
            case 8 -> "Jawara Choukai";
            case 9 -> "Master JLPT";
            default -> "Sensei Legendaris";
        };
    }

    @Transactional
    public LeaderboardResponse getLeaderboard(Long currentUserId) {
        return getLeaderboard(currentUserId, "JA");
    }

    @Transactional
    public LeaderboardResponse getLeaderboard(Long currentUserId, String trackCode) {
        String track = (trackCode != null && !trackCode.isBlank()) ? trackCode.trim().toUpperCase() : "JA";

        // If Japanese track, maintain full backward compatibility and sync with kotoba progress
        if ("JA".equals(track)) {
            if (currentUserId != null) {
                userRepository.findById(currentUserId).ifPresent(u -> {
                    long distinctKotobas = userProgressRepository.countDistinctKotobaByUser(currentUserId);
                    int minXp = (int) (distinctKotobas * 10);
                    if (minXp > u.getTotalXp()) {
                        u.setTotalXp(minXp);
                        userRepository.save(u);
                    }
                });
            }

            List<User> topUsers = userRepository.findLeaderboardTopUsers(PageRequest.of(0, 30));
            long totalLearners = userRepository.countNonAdminUsers();

            List<LeaderboardEntryDto> entries = new ArrayList<>();
            LeaderboardEntryDto currentUserEntry = null;

            for (int i = 0; i < topUsers.size(); i++) {
                User u = topUsers.get(i);
                int rank = i + 1;
                boolean isCurrent = currentUserId != null && u.getId().equals(currentUserId);
                int effectiveXp = u.getTotalXp();
                if (isCurrent) {
                    long distinct = userProgressRepository.countDistinctKotobaByUser(u.getId());
                    effectiveXp = Math.max(effectiveXp, (int) (distinct * 10));
                }
                int userLvl = calculateGamificationLevel(effectiveXp);
                String title = getLevelTitle(userLvl);

                LeaderboardEntryDto dto = new LeaderboardEntryDto(
                        rank,
                        u.getId(),
                        u.getDisplayName() != null ? u.getDisplayName() : "Murid Kanarau",
                        effectiveXp,
                        userLvl,
                        title,
                        u.getStreak(),
                        u.getCurrentLevel() != null ? u.getCurrentLevel().name() : "N2",
                        isCurrent
                );

                entries.add(dto);
                if (isCurrent) {
                    currentUserEntry = dto;
                }
            }

            if (currentUserEntry == null && currentUserId != null) {
                User u = userRepository.findById(currentUserId).orElse(null);
                if (u != null && !"ADMIN".equalsIgnoreCase(u.getRole())) {
                    long distinct = userProgressRepository.countDistinctKotobaByUser(u.getId());
                    int effectiveXp = Math.max(u.getTotalXp(), (int) (distinct * 10));
                    int userRank = (int) userRepository.countUsersWithMoreXp(effectiveXp) + 1;
                    int userLvl = calculateGamificationLevel(effectiveXp);
                    String title = getLevelTitle(userLvl);

                    currentUserEntry = new LeaderboardEntryDto(
                            userRank,
                            u.getId(),
                            u.getDisplayName() != null ? u.getDisplayName() : "Murid Kanarau",
                            effectiveXp,
                            userLvl,
                            title,
                            u.getStreak(),
                            u.getCurrentLevel() != null ? u.getCurrentLevel().name() : "N2",
                            true
                    );
                }
            }

            return new LeaderboardResponse(entries, currentUserEntry, totalLearners);
        }

        // Non-Japanese track (ID, MY, EN): strictly isolate XP, streak, and level
        List<UserTrackStats> topStats = userTrackStatsRepository.findTopUsersByTrackCode(track, PageRequest.of(0, 30));
        long totalInTrack = userTrackStatsRepository.countUsersInTrack(track);

        List<Long> userIds = topStats.stream().map(UserTrackStats::getUserId).toList();
        Map<Long, User> userMap = userRepository.findAllById(userIds).stream()
                .collect(Collectors.toMap(User::getId, u -> u));

        List<LeaderboardEntryDto> entries = new ArrayList<>();
        LeaderboardEntryDto currentUserEntry = null;

        for (int i = 0; i < topStats.size(); i++) {
            UserTrackStats s = topStats.get(i);
            int rank = i + 1;
            boolean isCurrent = currentUserId != null && s.getUserId().equals(currentUserId);
            User u = userMap.get(s.getUserId());
            String name = (u != null && u.getDisplayName() != null) ? u.getDisplayName() : "Murid " + track;
            int xp = s.getTotalXp();
            int userLvl = calculateGamificationLevel(xp);
            String title = getLevelTitle(userLvl);

            LeaderboardEntryDto dto = new LeaderboardEntryDto(
                    rank,
                    s.getUserId(),
                    name,
                    xp,
                    userLvl,
                    title,
                    s.getStreak(),
                    u != null ? u.getCurrentTrackLevel() : "BIPA-1",
                    isCurrent
            );

            entries.add(dto);
            if (isCurrent) {
                currentUserEntry = dto;
            }
        }

        // Current user handling if not in top list or hasn't studied this track yet
        if (currentUserId != null) {
            if (currentUserEntry == null) {
                User u = userRepository.findById(currentUserId).orElse(null);
                UserTrackStats myStats = userTrackStatsRepository.findByUserIdAndTrackCode(currentUserId, track).orElse(null);
                int myXp = myStats != null ? myStats.getTotalXp() : 0;
                int myStreak = myStats != null ? myStats.getStreak() : 0;
                int myLvl = calculateGamificationLevel(myXp);
                String title = getLevelTitle(myLvl);
                int userRank = (int) userTrackStatsRepository.countUsersWithMoreXpInTrack(track, myXp) + 1;
                String name = (u != null && u.getDisplayName() != null) ? u.getDisplayName() : "Murid " + track;

                currentUserEntry = new LeaderboardEntryDto(
                        userRank,
                        currentUserId,
                        name,
                        myXp,
                        myLvl,
                        title,
                        myStreak,
                        u != null ? u.getCurrentTrackLevel() : "BIPA-1",
                        true
                );
            }
        }

        return new LeaderboardResponse(entries, currentUserEntry, Math.max(1, totalInTrack));
    }
}
