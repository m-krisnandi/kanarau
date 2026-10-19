package com.kanarau.kanji.repository;

import com.kanarau.kanji.entity.Kanji;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface KanjiRepository extends JpaRepository<Kanji, Long> {
    Optional<Kanji> findByCharacter(String character);

    List<Kanji> findByJlptLevel(String jlptLevel);

    @Query("SELECT k FROM Kanji k WHERE " +
           "k.character LIKE CONCAT('%', :q, '%') OR " +
           "LOWER(k.meaning) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.meaningEn) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.meaningMy) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.onReading) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(k.kunReading) LIKE LOWER(CONCAT('%', :q, '%'))")
    List<Kanji> search(@Param("q") String query);
}
