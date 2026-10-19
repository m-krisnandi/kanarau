package com.kanarau.review.repository;

import com.kanarau.review.entity.ReviewLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;

public interface ReviewLogRepository extends JpaRepository<ReviewLog, Long> {

    List<ReviewLog> findByProgressIdOrderByReviewedAtDesc(Long progressId);

    @Query("SELECT COUNT(rl) FROM ReviewLog rl WHERE rl.progressId IN " +
           "(SELECT up.id FROM UserProgress up WHERE up.userId = :userId) " +
           "AND rl.reviewedAt BETWEEN :start AND :end")
    long countReviewsInRange(@Param("userId") Long userId,
                             @Param("start") Instant start,
                             @Param("end") Instant end);
}
