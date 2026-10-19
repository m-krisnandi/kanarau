package com.kanarau.admin.repository;

import com.kanarau.admin.entity.UserFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserFeedbackRepository extends JpaRepository<UserFeedback, Long> {
    List<UserFeedback> findAllByOrderByCreatedAtDesc();
    long countByStatus(String status);
}
