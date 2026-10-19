package com.kanarau.admin.dto;

import jakarta.validation.constraints.NotBlank;

public record UserRoleUpdateRequest(
        @NotBlank(message = "Role wajib diisi")
        String role
) {}
