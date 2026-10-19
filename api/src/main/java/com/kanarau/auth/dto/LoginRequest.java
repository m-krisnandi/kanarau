package com.kanarau.auth.dto;

import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @NotBlank(message = "Email atau username wajib diisi")
        String email,

        @NotBlank(message = "Password wajib diisi")
        String password
) {}
