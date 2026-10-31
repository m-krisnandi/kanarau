package com.kanarau.course.repository;

import com.kanarau.course.entity.UserTrackStats;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserTrackStatsRepository extends JpaRepository<UserTrackStats, Long> {

    Optional<UserTrackStats> findByUserIdAndTrackCode(Long userId, String trackCode);

    @Query("SELECT s FROM UserTrackStats s WHERE s.trackCode = :trackCode ORDER BY s.totalXp DESC, s.streak DESC")
    List<UserTrackStats> findTopUsersByTrackCode(@Param("trackCode") String trackCode, Pageable pageable);

    @Query("SELECT COUNT(s) FROM UserTrackStats s WHERE s.trackCode = :trackCode AND s.totalXp > :xp")
    long countUsersWithMoreXpInTrack(@Param("trackCode") String trackCode, @Param("xp") int xp);

    @Query("SELECT COUNT(s) FROM UserTrackStats s WHERE s.trackCode = :trackCode")
    long countUsersInTrack(@Param("trackCode") String trackCode);
}
