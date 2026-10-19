package com.kanarau.jisho.util;

import java.util.ArrayList;
import java.util.List;

public final class RomajiConverter {

    private RomajiConverter() {}

    private static final String[][] ROMAJI_TABLE = {
            {"kya", "きゃ"}, {"kyu", "きゅ"}, {"kyo", "きょ"},
            {"sha", "しゃ"}, {"shu", "しゅ"}, {"sho", "しょ"},
            {"cha", "ちゃ"}, {"chu", "ちゅ"}, {"cho", "ちょ"},
            {"nya", "にゃ"}, {"nyu", "にゅ"}, {"nyo", "にょ"},
            {"hya", "ひゃ"}, {"hyu", "ひゅ"}, {"hyo", "ひょ"},
            {"mya", "みゃ"}, {"myu", "みゅ"}, {"myo", "みょ"},
            {"rya", "りゃ"}, {"ryu", "りゅ"}, {"ryo", "りょ"},
            {"gya", "ぎゃ"}, {"gyu", "ぎゅ"}, {"gyo", "ぎょ"},
            {"ja", "じゃ"}, {"ju", "じゅ"}, {"jo", "じょ"},
            {"bya", "びゃ"}, {"byu", "びゅ"}, {"byo", "びょ"},
            {"pya", "ぴゃ"}, {"pyu", "ぴゅ"}, {"pyo", "ぴょ"},
            {"shi", "し"}, {"chi", "ち"}, {"tsu", "つ"}, {"fu", "ふ"},
            {"ka", "か"}, {"ki", "き"}, {"ku", "く"}, {"ke", "け"}, {"ko", "こ"},
            {"sa", "さ"}, {"si", "し"}, {"su", "す"}, {"se", "せ"}, {"so", "そ"},
            {"ta", "た"}, {"ti", "ち"}, {"tu", "つ"}, {"te", "て"}, {"to", "と"},
            {"na", "な"}, {"ni", "に"}, {"nu", "ぬ"}, {"ne", "ね"}, {"no", "の"},
            {"ha", "は"}, {"hi", "ひ"}, {"hu", "ふ"}, {"he", "へ"}, {"ho", "ほ"},
            {"ma", "ま"}, {"mi", "み"}, {"mu", "む"}, {"me", "め"}, {"mo", "も"},
            {"ya", "や"}, {"yu", "ゆ"}, {"yo", "よ"},
            {"ra", "ら"}, {"ri", "り"}, {"ru", "る"}, {"re", "れ"}, {"ro", "ろ"},
            {"wa", "わ"}, {"wo", "を"}, {"nn", "ん"},
            {"ga", "が"}, {"gi", "ぎ"}, {"gu", "ぐ"}, {"ge", "げ"}, {"go", "ご"},
            {"za", "ざ"}, {"ji", "じ"}, {"zi", "じ"}, {"zu", "ず"}, {"ze", "ぜ"}, {"zo", "ぞ"},
            {"da", "だ"}, {"di", "ぢ"}, {"du", "づ"}, {"de", "で"}, {"do", "ど"},
            {"ba", "ば"}, {"bi", "び"}, {"bu", "ぶ"}, {"be", "べ"}, {"bo", "ぼ"},
            {"pa", "ぱ"}, {"pi", "ぴ"}, {"pu", "ぷ"}, {"pe", "ぺ"}, {"po", "ぽ"},
            {"a", "あ"}, {"i", "い"}, {"u", "う"}, {"e", "え"}, {"o", "お"},
            {"n", "ん"}
    };

    /**
     * Convert Romaji input to Hiragana.
     * e.g. "inu" -> "いぬ", "neko" -> "ねこ", "taberu" -> "たべる", "shinjiru" -> "しんじる"
     */
    public static String toHiragana(String text) {
        if (text == null || text.isBlank()) return "";
        String s = text.trim().toLowerCase();
        StringBuilder sb = new StringBuilder();
        int i = 0;
        int len = s.length();

        while (i < len) {
            char c = s.charAt(i);

            // Double consonants (sokuon 'っ')
            if (i + 1 < len) {
                char nextC = s.charAt(i + 1);
                if (c == nextC && isConsonant(c) && c != 'n') {
                    sb.append('っ');
                    i++;
                    continue;
                }
            }

            boolean matched = false;
            for (String[] pair : ROMAJI_TABLE) {
                String rom = pair[0];
                if (s.startsWith(rom, i)) {
                    sb.append(pair[1]);
                    i += rom.length();
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                sb.append(c);
                i++;
            }
        }

        return sb.toString();
    }

    /**
     * Convert Hiragana characters to Katakana
     */
    public static String toKatakana(String hiragana) {
        if (hiragana == null || hiragana.isBlank()) return "";
        StringBuilder sb = new StringBuilder();
        for (char c : hiragana.toCharArray()) {
            if (c >= '\u3041' && c <= '\u3096') {
                sb.append((char) (c + 0x60));
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }

    /**
     * Check if string contains any latin letters
     */
    public static boolean containsLatin(String text) {
        if (text == null) return false;
        for (char c : text.toCharArray()) {
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
                return true;
            }
        }
        return false;
    }

    private static boolean isConsonant(char c) {
        return "bcdfghjklmpqrstvwxyz".indexOf(c) >= 0;
    }
}
