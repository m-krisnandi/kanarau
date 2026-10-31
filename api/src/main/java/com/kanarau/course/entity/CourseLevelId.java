package com.kanarau.course.entity;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class CourseLevelId implements Serializable {

    @Column(name = "track_code", length = 20)
    private String trackCode;

    @Column(name = "level_code", length = 30)
    private String levelCode;

    public CourseLevelId() {}

    public CourseLevelId(String trackCode, String levelCode) {
        this.trackCode = trackCode;
        this.levelCode = levelCode;
    }

    public String getTrackCode() { return trackCode; }
    public void setTrackCode(String trackCode) { this.trackCode = trackCode; }
    public String getLevelCode() { return levelCode; }
    public void setLevelCode(String levelCode) { this.levelCode = levelCode; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CourseLevelId that = (CourseLevelId) o;
        return Objects.equals(trackCode, that.trackCode) && Objects.equals(levelCode, that.levelCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trackCode, levelCode);
    }
}
