package com.kanarau.course.registry;

import com.kanarau.course.strategy.CourseTrackStrategy;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class CourseTrackRegistry {

    private final Map<String, CourseTrackStrategy> strategyMap = new HashMap<>();
    private final Map<String, CourseTrackStrategy> targetLanguageMap = new HashMap<>();

    public CourseTrackRegistry(List<CourseTrackStrategy> strategies) {
        for (CourseTrackStrategy strategy : strategies) {
            strategyMap.put(strategy.getTrackCode().toUpperCase(), strategy);
            targetLanguageMap.put(strategy.getTargetLanguage().toLowerCase(), strategy);
        }
    }

    public CourseTrackStrategy getStrategy(String trackCode) {
        if (trackCode == null || trackCode.isBlank()) {
            return strategyMap.get("JA");
        }
        CourseTrackStrategy strategy = strategyMap.get(trackCode.trim().toUpperCase());
        if (strategy != null) {
            return strategy;
        }
        // Try looking up by target language code (e.g. 'ja', 'id', 'my')
        CourseTrackStrategy byLang = targetLanguageMap.get(trackCode.trim().toLowerCase());
        if (byLang != null) {
            return byLang;
        }
        return strategyMap.get("JA");
    }

    public List<CourseTrackStrategy> getAllStrategies() {
        return new ArrayList<>(strategyMap.values());
    }
}
