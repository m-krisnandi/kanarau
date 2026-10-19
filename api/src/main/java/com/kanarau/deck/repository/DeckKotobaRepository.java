package com.kanarau.deck.repository;

import com.kanarau.deck.entity.DeckKotoba;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DeckKotobaRepository extends JpaRepository<DeckKotoba, Long> {
    List<DeckKotoba> findByDeckIdOrderBySortOrder(Long deckId);
    List<DeckKotoba> findByKotobaId(Long kotobaId);
}
