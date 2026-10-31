package com.kanarau.course.repository;

import com.kanarau.course.entity.CourseLevel;
import com.kanarau.course.entity.CourseLevelId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseLevelRepository extends JpaRepository<CourseLevel, CourseLevelId> {
    List<CourseLevel> findByIdTrackCodeOrderBySortOrderAsc(String trackCode);
}
