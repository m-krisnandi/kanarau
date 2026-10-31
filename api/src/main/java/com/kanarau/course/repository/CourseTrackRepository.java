package com.kanarau.course.repository;

import com.kanarau.course.entity.CourseTrack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseTrackRepository extends JpaRepository<CourseTrack, String> {
    List<CourseTrack> findByIsActiveTrue();
}
