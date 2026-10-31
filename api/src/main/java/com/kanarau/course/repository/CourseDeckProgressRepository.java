package com.kanarau.course.repository;

import com.kanarau.course.entity.CourseDeckProgress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CourseDeckProgressRepository extends JpaRepository<CourseDeckProgress, Long> {

    Optional<CourseDeckProgress> findByUserIdAndDeckId(Long userId, Long deckId);

    List<CourseDeckProgress> findByUserIdAndTrackCode(Long userId, String trackCode);
}
