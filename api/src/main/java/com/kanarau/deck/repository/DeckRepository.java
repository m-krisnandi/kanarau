package com.kanarau.deck.repository;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.deck.entity.Deck;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DeckRepository extends JpaRepository<Deck, Long> {
    List<Deck> findByLevelOrderByDayNumber(JlptLevel level);
    List<Deck> findAllByOrderByLevelAscDayNumberAsc();
}
