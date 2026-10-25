package com.kanarau.deck.controller;

import com.kanarau.common.dto.ApiResponse;
import com.kanarau.common.model.JlptLevel;
import com.kanarau.deck.dto.DeckResponse;
import com.kanarau.deck.service.DeckService;
import com.kanarau.study.dto.QuizCardResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/decks")
public class DeckController {

    private final DeckService deckService;
    private final com.kanarau.auth.repository.UserRepository userRepository;

    public DeckController(DeckService deckService, com.kanarau.auth.repository.UserRepository userRepository) {
        this.deckService = deckService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<DeckResponse>>> listDecks(
            @RequestParam(required = false) JlptLevel level,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        List<DeckResponse> decks = deckService.getAllDecks(userId, level);
        return ResponseEntity.ok(ApiResponse.ok(decks));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<DeckResponse>> getDeck(
            @PathVariable Long id,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        DeckResponse deck = deckService.getDeckById(id, userId);
        return ResponseEntity.ok(ApiResponse.ok(deck));
    }

    @GetMapping("/{deckId}/cards")
    public ResponseEntity<ApiResponse<List<QuizCardResponse>>> getCards(
            @PathVariable Long deckId,
            @RequestParam(required = false, defaultValue = "id") String lang
    ) {
        List<QuizCardResponse> cards = deckService.generateCardsForDeck(deckId, lang);
        return ResponseEntity.ok(ApiResponse.ok(cards));
    }

    @GetMapping("/{deckId}/kotoba")
    public ResponseEntity<ApiResponse<List<com.kanarau.kotoba.dto.KotobaResponse>>> getKotobas(
            @PathVariable Long deckId,
            @RequestParam(required = false, defaultValue = "id") String lang
    ) {
        List<com.kanarau.kotoba.dto.KotobaResponse> kotobas = deckService.getKotobasForDeck(deckId, lang);
        return ResponseEntity.ok(ApiResponse.ok(kotobas));
    }

    private Long getUserId(Authentication auth) {
        if (auth == null || auth.getPrincipal() == null) return null;
        Object principal = auth.getPrincipal();
        if (principal instanceof Long l) return l;
        if (principal instanceof Number n) return n.longValue();
        try {
            return Long.parseLong(principal.toString());
        } catch (NumberFormatException ignored) {
            return userRepository.findByEmailIgnoreCase(principal.toString())
                    .map(com.kanarau.auth.entity.User::getId)
                    .orElse(null);
        }
    }
}
