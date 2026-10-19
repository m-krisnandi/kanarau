package com.kanarau.auth.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        String email,

        @NotBlank(message = "Password is required")
        @Size(min = 6, message = "Password must be at least 6 characters")
        String password,

        @JsonAlias({"displayName", "name"})
        String name
) {
    public String getEffectiveName() {
        if (name != null && !name.isBlank()) return name;
        return email.split("@")[0];
    }
}
