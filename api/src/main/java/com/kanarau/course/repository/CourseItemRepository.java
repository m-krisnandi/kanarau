package com.kanarau.course.repository;

import com.kanarau.course.entity.CourseItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseItemRepository extends JpaRepository<CourseItem, Long> {
    List<CourseItem> findByDeckIdOrderBySortOrderAsc(Long deckId);
    List<CourseItem> findByTrackCodeAndLevelCodeOrderBySortOrderAsc(String trackCode, String levelCode);
}
