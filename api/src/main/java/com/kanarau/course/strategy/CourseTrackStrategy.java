package com.kanarau.course.strategy;

import com.kanarau.course.dto.CourseCardDto;
import com.kanarau.course.dto.CourseDeckDto;
import com.kanarau.course.dto.CourseLevelDto;
import com.kanarau.course.dto.CourseTrackDto;

import java.util.List;

public interface CourseTrackStrategy {
    String getTrackCode();
    String getTargetLanguage();
    CourseTrackDto getTrackInfo(String myLang);
    List<CourseLevelDto> getLevels(String myLang);
    List<CourseDeckDto> getDecks(String levelCode, String myLang, Long userId);
    List<CourseCardDto> getDeckCards(Long deckId, String myLang);
}
