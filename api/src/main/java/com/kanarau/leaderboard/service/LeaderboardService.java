package com.kanarau.leaderboard.service;

import com.kanarau.auth.entity.User;
import com.kanarau.auth.repository.UserRepository;
import com.kanarau.leaderboard.dto.LeaderboardEntryDto;
import com.kanarau.leaderboard.dto.LeaderboardResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LeaderboardService {

    private final UserRepository userRepository;

    public LeaderboardService(UserRepository userRepository) {
        this.userRepository = userRepository;
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

    public LeaderboardResponse getLeaderboard(Long currentUserId) {
        List<User> topUsers = userRepository.findLeaderboardTopUsers(PageRequest.of(0, 30));
        long totalLearners = userRepository.countNonAdminUsers();

        List<LeaderboardEntryDto> entries = new ArrayList<>();
        LeaderboardEntryDto currentUserEntry = null;

        for (int i = 0; i < topUsers.size(); i++) {
            User u = topUsers.get(i);
            int rank = i + 1;
            boolean isCurrent = currentUserId != null && u.getId().equals(currentUserId);
            int userLvl = calculateGamificationLevel(u.getTotalXp());
            String title = getLevelTitle(userLvl);

            LeaderboardEntryDto dto = new LeaderboardEntryDto(
                    rank,
                    u.getId(),
                    u.getDisplayName() != null ? u.getDisplayName() : "Murid Kanarau",
                    u.getTotalXp(),
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

        // If current user is not in top 30, fetch and compute their exact rank
        if (currentUserEntry == null && currentUserId != null) {
            User u = userRepository.findById(currentUserId).orElse(null);
            if (u != null && !"ADMIN".equalsIgnoreCase(u.getRole())) {
                int userRank = (int) userRepository.countUsersWithMoreXp(u.getTotalXp()) + 1;
                int userLvl = calculateGamificationLevel(u.getTotalXp());
                String title = getLevelTitle(userLvl);

                currentUserEntry = new LeaderboardEntryDto(
                        userRank,
                        u.getId(),
                        u.getDisplayName() != null ? u.getDisplayName() : "Murid Kanarau",
                        u.getTotalXp(),
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
}
