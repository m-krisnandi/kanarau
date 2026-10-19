package com.kanarau.auth.dto;

public record AuthResponse(
        UserDto user,
        String token
) {}
