package com.kanarau.auth.controller;

import com.kanarau.auth.dto.AuthResponse;
import com.kanarau.auth.dto.LoginRequest;
import com.kanarau.auth.dto.RegisterRequest;
import com.kanarau.auth.dto.UserDto;
import com.kanarau.auth.entity.User;
import com.kanarau.auth.service.AuthService;
import com.kanarau.common.dto.ApiResponse;
import com.kanarau.common.exception.ApiException;
import com.kanarau.common.model.JlptLevel;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    private Long getRequiredUserId(Authentication authentication) {
        if (authentication != null && authentication.getPrincipal() instanceof Long uid) {
            return uid;
        }
        throw new ApiException(HttpStatus.UNAUTHORIZED, "Sesi tidak valid atau belum login");
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> register(@Valid @RequestBody RegisterRequest req) {
        AuthResponse response = authService.register(req);
        return ResponseEntity.ok(ApiResponse.ok(response, "Registrasi berhasil"));
    }

    public record ForgotPasswordRequest(
            @NotBlank(message = "Email tidak boleh kosong")
            String email,
            @NotBlank(message = "Password baru tidak boleh kosong")
            @Size(min = 6, message = "Password baru minimal 6 karakter")
            String newPassword
    ) {}

    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<String>> forgotPassword(@Valid @RequestBody ForgotPasswordRequest req) {
        authService.resetPassword(req.email(), req.newPassword());
        return ResponseEntity.ok(ApiResponse.ok("Password berhasil direset", "Password baru berhasil disimpan. Silakan masuk."));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@Valid @RequestBody LoginRequest req) {
        AuthResponse response = authService.login(req);
        return ResponseEntity.ok(ApiResponse.ok(response, "Login berhasil"));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<UserDto>> getCurrentUser(Authentication authentication) {
        Long userId = getRequiredUserId(authentication);
        UserDto user = authService.getCurrentUser(userId);
        return ResponseEntity.ok(ApiResponse.ok(user));
    }

    public record UpdateLevelRequest(JlptLevel level) {}

    @PutMapping("/level")
    public ResponseEntity<ApiResponse<UserDto>> updateLevel(
            @RequestBody UpdateLevelRequest req,
            Authentication authentication
    ) {
        Long userId = getRequiredUserId(authentication);
        UserDto user = authService.updateLevel(userId, req.level());
        return ResponseEntity.ok(ApiResponse.ok(user, "Level berhasil diubah ke " + req.level()));
    }

    public record ChangePasswordRequest(
            @NotBlank(message = "Password baru tidak boleh kosong")
            @Size(min = 6, message = "Password baru minimal 6 karakter")
            String newPassword
    ) {}

    @PutMapping("/password")
    public ResponseEntity<ApiResponse<String>> changePassword(
            @Valid @RequestBody ChangePasswordRequest req,
            Authentication authentication
    ) {
        Long userId = getRequiredUserId(authentication);
        authService.changePassword(userId, req.newPassword());
        return ResponseEntity.ok(ApiResponse.ok("Password berhasil diperbarui", "Password berhasil diubah"));
    }

    public record UpdateDiscordRequest(
            String discordUsername,
            String discordWebhookUrl,
            Boolean discordNotificationsEnabled
    ) {}

    @PutMapping("/discord")
    public ResponseEntity<ApiResponse<UserDto>> updateDiscord(
            @RequestBody UpdateDiscordRequest req,
            Authentication authentication
    ) {
        Long userId = getRequiredUserId(authentication);
        UserDto user = authService.updateDiscord(userId, req.discordUsername(), req.discordWebhookUrl(), req.discordNotificationsEnabled());
        return ResponseEntity.ok(ApiResponse.ok(user, "Pengaturan Discord berhasil disimpan"));
    }

    public record TestDiscordRequest(String discordWebhookUrl) {}

    @PostMapping("/discord/test")
    public ResponseEntity<ApiResponse<Map<String, Object>>> testDiscord(
            @RequestBody(required = false) TestDiscordRequest req,
            Authentication authentication
    ) {
        Long userId = getRequiredUserId(authentication);
        User user = authService.getUserEntity(userId);
        String targetWebhook = (req != null && req.discordWebhookUrl() != null && !req.discordWebhookUrl().isBlank())
                ? req.discordWebhookUrl().trim()
                : user.getDiscordWebhookUrl();

        if (targetWebhook != null && targetWebhook.startsWith("https://discord.com/api/webhooks/")) {
            try {
                String payload = """
                {
                  "content": "Pengingat Belajar Kanarau: Halo %s! Sesi belajar harian JLPT %s (~15 menit) sudah siap.",
                  "embeds": [
                    {
                      "title": "Kanarau — Pengingat Sesi Belajar",
                      "description": "Streak kamu saat ini: %d hari. Ayo selesaikan target kotoba hari ini!",
                      "color": 5195493
                    }
                  ]
                }
                """.formatted(user.getDisplayName(), user.getCurrentLevel(), user.getStreak());

                HttpClient client = HttpClient.newBuilder()
                        .connectTimeout(Duration.ofSeconds(5))
                        .build();

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(targetWebhook))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(payload))
                        .timeout(Duration.ofSeconds(10))
                        .build();

                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() >= 200 && response.statusCode() < 300) {
                    return ResponseEntity.ok(ApiResponse.ok(Map.of(
                            "sent", true,
                            "mode", "webhook",
                            "message", "Notifikasi Discord berhasil dikirim langsung ke webhook server kamu!"
                    )));
                } else {
                    return ResponseEntity.ok(ApiResponse.ok(Map.of(
                            "sent", false,
                            "mode", "webhook",
                            "message", "Discord webhook merespon dengan status: " + response.statusCode()
                    )));
                }
            } catch (Exception e) {
                return ResponseEntity.ok(ApiResponse.ok(Map.of(
                        "sent", false,
                        "mode", "webhook",
                        "message", "Gagal mengirim ke webhook: " + e.getMessage()
                )));
            }
        }

        String username = user.getDiscordUsername() != null ? user.getDiscordUsername() : user.getDisplayName();
        return ResponseEntity.ok(ApiResponse.ok(Map.of(
                "sent", true,
                "mode", "simulated",
                "message", "Simulasi notifikasi pengingat Discord berhasil disiapkan untuk akun @" + username
        )));
    }

    public record UpdateLanguageRequest(
            @NotBlank(message = "Language tidak boleh kosong")
            String language
    ) {}

    @PutMapping("/language")
    public ResponseEntity<ApiResponse<UserDto>> updateLanguage(
            @Valid @RequestBody UpdateLanguageRequest req,
            Authentication authentication
    ) {
        Long userId = getRequiredUserId(authentication);
        UserDto user = authService.updateLanguage(userId, req.language());
        return ResponseEntity.ok(ApiResponse.ok(user, "Preferensi bahasa berhasil disimpan"));
    }

    public record RefreshTokenRequest(String token) {}

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse<AuthResponse>> refreshToken(
            @RequestBody(required = false) RefreshTokenRequest req,
            HttpServletRequest request
    ) {
        String token = (req != null && req.token() != null && !req.token().isBlank())
                ? req.token().trim()
                : null;

        if (token == null) {
            String bearer = request.getHeader("Authorization");
            if (bearer != null && bearer.startsWith("Bearer ")) {
                token = bearer.substring(7).trim();
            }
        }

        AuthResponse response = authService.refreshToken(token);
        return ResponseEntity.ok(ApiResponse.ok(response, "Token berhasil diperbarui"));
    }
}
