package com.kanarau.admin.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateAdminRequest(
        @NotBlank(message = "Email atau username wajib diisi")
        String email,
        String name,
        String password
) {}
