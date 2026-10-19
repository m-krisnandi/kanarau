package com.kanarau.auth.service;

import com.kanarau.auth.dto.AuthResponse;
import com.kanarau.auth.dto.LoginRequest;
import com.kanarau.auth.dto.RegisterRequest;
import com.kanarau.auth.dto.UserDto;
import com.kanarau.auth.entity.User;
import com.kanarau.auth.repository.UserRepository;
import com.kanarau.auth.security.JwtTokenProvider;
import com.kanarau.common.exception.ApiException;
import com.kanarau.common.model.JlptLevel;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtTokenProvider tokenProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @Transactional
    public AuthResponse register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.email())) {
            throw new ApiException(HttpStatus.CONFLICT, "Email sudah terdaftar");
        }

        String encodedPassword = passwordEncoder.encode(req.password());
        User user = new User(req.email(), encodedPassword, req.getEffectiveName());
        user = userRepository.save(user);

        String token = tokenProvider.generateToken(user.getId(), user.getEmail());
        return new AuthResponse(UserDto.from(user), token);
    }

    public AuthResponse login(LoginRequest req) {
        String identifier = req.email() != null ? req.email().trim() : "";
        User user = userRepository.findByEmailIgnoreCase(identifier)
                .or(() -> {
                    if ("admin".equalsIgnoreCase(identifier)) {
                        return userRepository.findByEmailIgnoreCase("admin@kanarau.com");
                    }
                    if ("admin@kanarau.com".equalsIgnoreCase(identifier)) {
                        return userRepository.findByEmailIgnoreCase("admin");
                    }
                    return Optional.empty();
                })
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "Email atau password salah"));

        if (!passwordEncoder.matches(req.password(), user.getPasswordHash())) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Email atau password salah");
        }

        String token = tokenProvider.generateToken(user.getId(), user.getEmail());
        return new AuthResponse(UserDto.from(user), token);
    }

    public User getUserEntity(Long userId) {
        if (userId == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Sesi tidak valid. Silakan login.");
        }
        return userRepository.findById(userId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Pengguna tidak ditemukan"));
    }

    public UserDto getCurrentUser(Long userId) {
        User user = getUserEntity(userId);
        return UserDto.from(user);
    }

    @Transactional
    public UserDto updateLevel(Long userId, JlptLevel level) {
        User user = getUserEntity(userId);
        user.setCurrentLevel(level);
        user = userRepository.save(user);
        return UserDto.from(user);
    }

    @Transactional
    public void resetPassword(String email, String newPassword) {
        if (email == null || email.isBlank()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Email tidak boleh kosong");
        }
        String cleanEmail = email.trim();
        User user = userRepository.findByEmailIgnoreCase(cleanEmail)
                .or(() -> {
                    if ("admin".equalsIgnoreCase(cleanEmail)) {
                        return userRepository.findByEmailIgnoreCase("admin@kanarau.com");
                    }
                    return Optional.empty();
                })
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Akun tidak ditemukan"));

        if (newPassword == null || newPassword.trim().length() < 6) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Password baru minimal 6 karakter");
        }
        user.setPasswordHash(passwordEncoder.encode(newPassword.trim()));
        userRepository.save(user);
    }

    @Transactional
    public void changePassword(Long userId, String newPassword) {
        User user = getUserEntity(userId);
        if (newPassword == null || newPassword.trim().length() < 6) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Password baru minimal 6 karakter");
        }
        user.setPasswordHash(passwordEncoder.encode(newPassword.trim()));
        userRepository.save(user);
    }

    @Transactional
    public UserDto updateDiscord(Long userId, String discordUsername, String discordWebhookUrl, Boolean enabled) {
        User user = getUserEntity(userId);
        if (discordUsername != null) {
            user.setDiscordUsername(discordUsername.isBlank() ? null : discordUsername.trim());
        }
        if (discordWebhookUrl != null) {
            user.setDiscordWebhookUrl(discordWebhookUrl.isBlank() ? null : discordWebhookUrl.trim());
        }
        if (enabled != null) {
            user.setDiscordNotificationsEnabled(enabled);
        }
        user = userRepository.save(user);
        return UserDto.from(user);
    }
}
