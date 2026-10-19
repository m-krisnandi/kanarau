package com.kanarau.kotoba.repository;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.kotoba.entity.Kotoba;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface KotobaRepository extends JpaRepository<Kotoba, Long> {

    List<Kotoba> findByLevel(JlptLevel level);

    List<Kotoba> findByIdIn(List<Long> ids);

    @Query("SELECT k FROM Kotoba k WHERE " +
           "LOWER(k.kanji) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.hiragana) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.meaningId) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.meaningEn) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.meaningMy) LIKE LOWER(CONCAT('%', :q, '%'))")
    List<Kotoba> search(@Param("q") String query);

    @Query("SELECT k FROM Kotoba k WHERE k.level = :level AND k.id <> :excludeId ORDER BY FUNCTION('RANDOM')")
    List<Kotoba> findRandomByLevel(@Param("level") JlptLevel level, @Param("excludeId") Long excludeId);
}
