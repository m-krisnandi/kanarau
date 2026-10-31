package com.kanarau.course.repository;

import com.kanarau.course.entity.CourseDeck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseDeckRepository extends JpaRepository<CourseDeck, Long> {
    List<CourseDeck> findByTrackCodeAndLevelCodeOrderByDayNumberAsc(String trackCode, String levelCode);
    List<CourseDeck> findByTrackCodeOrderByDayNumberAsc(String trackCode);
}
