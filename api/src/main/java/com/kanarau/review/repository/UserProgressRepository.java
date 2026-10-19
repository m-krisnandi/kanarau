package com.kanarau.review.repository;

import com.kanarau.common.model.StudyDirection;
import com.kanarau.review.entity.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

public interface UserProgressRepository extends JpaRepository<UserProgress, Long> {

    Optional<UserProgress> findByUserIdAndKotobaIdAndDirection(Long userId, Long kotobaId, StudyDirection direction);

    List<UserProgress> findByUserId(Long userId);

    List<UserProgress> findByUserIdAndKotobaIdIn(Long userId, List<Long> kotobaIds);

    @Query("SELECT up FROM UserProgress up WHERE up.userId = :userId " +
           "AND up.nextReview <= :now " +
           "AND up.status IN ('LEARNING', 'REVIEW') " +
           "ORDER BY up.nextReview ASC")
    List<UserProgress> findDueReviews(@Param("userId") Long userId, @Param("now") Instant now);

    @Query("SELECT COUNT(up) FROM UserProgress up WHERE up.userId = :userId AND up.status = 'MASTERED'")
    long countMasteredByUser(@Param("userId") Long userId);

    @Query("SELECT COUNT(up) FROM UserProgress up WHERE up.userId = :userId AND up.status = 'LEARNING'")
    long countLearningByUser(@Param("userId") Long userId);

    @Query("SELECT COUNT(up) FROM UserProgress up WHERE up.userId = :userId AND up.status = 'REVIEW'")
    long countReviewByUser(@Param("userId") Long userId);

    @Query("SELECT COUNT(DISTINCT up.kotobaId) FROM UserProgress up WHERE up.userId = :userId")
    long countDistinctKotobaByUser(@Param("userId") Long userId);

    @Query("SELECT up FROM UserProgress up WHERE up.userId = :userId AND up.kotobaId IN :kotobaIds")
    List<UserProgress> findByUserIdAndKotobaIds(@Param("userId") Long userId, @Param("kotobaIds") List<Long> kotobaIds);

    @Query("SELECT DISTINCT CAST(up.lastReviewed AS date) FROM UserProgress up " +
           "WHERE up.userId = :userId AND up.lastReviewed BETWEEN :start AND :end")
    List<java.sql.Date> findReviewDatesByUserAndRange(
            @Param("userId") Long userId,
            @Param("start") Instant start,
            @Param("end") Instant end);

    @Query("SELECT COUNT(up) FROM UserProgress up WHERE up.status = 'MASTERED'")
    long totalMasteredWordsAll();

    @Query("SELECT COUNT(up) FROM UserProgress up WHERE up.status = 'LEARNING'")
    long totalLearningWordsAll();

    @Query("SELECT COUNT(up) FROM UserProgress up WHERE up.status = 'REVIEW'")
    long totalReviewWordsAll();
}
