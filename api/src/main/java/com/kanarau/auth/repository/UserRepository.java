package com.kanarau.auth.repository;

import com.kanarau.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailIgnoreCase(String email);
    boolean existsByEmail(String email);

    @org.springframework.data.jpa.repository.Query("SELECT u FROM User u WHERE u.role != 'ADMIN' ORDER BY u.totalXp DESC, u.streak DESC, u.id ASC")
    java.util.List<User> findLeaderboardTopUsers(org.springframework.data.domain.Pageable pageable);

    @org.springframework.data.jpa.repository.Query("SELECT COUNT(u) FROM User u WHERE u.role != 'ADMIN'")
    long countNonAdminUsers();

    @org.springframework.data.jpa.repository.Query("SELECT COUNT(u) FROM User u WHERE u.role != 'ADMIN' AND u.totalXp > :xp")
    long countUsersWithMoreXp(@org.springframework.data.repository.query.Param("xp") int xp);
}
