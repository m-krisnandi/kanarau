package com.kanarau.study.repository;

import com.kanarau.study.entity.StudySession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;

public interface StudySessionRepository extends JpaRepository<StudySession, Long> {

    List<StudySession> findByUserIdOrderByStartedAtDesc(Long userId);

    @Query("SELECT ss FROM StudySession ss WHERE ss.userId = :userId " +
           "AND ((ss.finishedAt >= :start AND ss.finishedAt < :end) " +
           "OR (ss.finishedAt IS NULL AND ss.startedAt >= :start AND ss.startedAt < :end)) " +
           "ORDER BY ss.startedAt DESC")
    List<StudySession> findByUserIdAndDateRange(
            @Param("userId") Long userId,
            @Param("start") Instant start,
            @Param("end") Instant end);

    @Query("SELECT COALESCE(SUM(ss.cardsStudied), 0) FROM StudySession ss WHERE ss.userId = :userId")
    long totalCardsStudiedByUser(@Param("userId") Long userId);

    @Query("SELECT COALESCE(SUM(ss.cardsCorrect), 0) FROM StudySession ss WHERE ss.userId = :userId")
    long totalCardsCorrectByUser(@Param("userId") Long userId);

    @Query("SELECT COALESCE(SUM(ss.cardsStudied), 0) FROM StudySession ss")
    long totalCardsStudiedAll();

    @Query("SELECT COALESCE(SUM(ss.cardsCorrect), 0) FROM StudySession ss")
    long totalCardsCorrectAll();
}
