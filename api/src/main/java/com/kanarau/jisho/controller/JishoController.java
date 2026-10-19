package com.kanarau.jisho.controller;

import com.kanarau.common.dto.ApiResponse;
import com.kanarau.jisho.dto.SearchResultResponse;
import com.kanarau.jisho.service.JishoService;
import com.kanarau.kanji.dto.KanjiResponse;
import com.kanarau.kotoba.dto.KotobaResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jisho")
public class JishoController {

    private final JishoService jishoService;

    public JishoController(JishoService jishoService) {
        this.jishoService = jishoService;
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<SearchResultResponse>>> search(
            @RequestParam(defaultValue = "") String q,
            @RequestParam(required = false, defaultValue = "id") String lang,
            @RequestParam(required = false) String level) {
        List<SearchResultResponse> results = jishoService.search(q, lang, level);
        return ResponseEntity.ok(ApiResponse.ok(results));
    }

    @GetMapping("/kotoba/{id}")
    public ResponseEntity<ApiResponse<KotobaResponse>> getKotoba(
            @PathVariable Long id,
            @RequestParam(required = false, defaultValue = "id") String lang) {
        KotobaResponse kotoba = jishoService.getKotobaById(id, lang);
        return ResponseEntity.ok(ApiResponse.ok(kotoba));
    }

    @GetMapping("/kanji/{id}")
    public ResponseEntity<ApiResponse<KanjiResponse>> getKanji(
            @PathVariable Long id,
            @RequestParam(required = false, defaultValue = "id") String lang) {
        KanjiResponse kanji = jishoService.getKanjiById(id, lang);
        return ResponseEntity.ok(ApiResponse.ok(kanji));
    }

    @GetMapping("/kanji/{kanjiId}/kotoba")
    public ResponseEntity<ApiResponse<List<KotobaResponse>>> getKotobaForKanji(
            @PathVariable Long kanjiId,
            @RequestParam(required = false, defaultValue = "id") String lang) {
        List<KotobaResponse> kotobas = jishoService.getKotobaByKanji(kanjiId, lang);
        return ResponseEntity.ok(ApiResponse.ok(kotobas));
    }
}
