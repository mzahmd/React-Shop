package com.example.backend.Authentication;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDTO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationService(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTO login(AuthenticationRequest authenticationRequest, HttpServletRequest request) {
        Optional<User> user = userDAO.findUserByEmail(authenticationRequest.email());

        if (user.isEmpty() || !passwordEncoder.matches(authenticationRequest.password(), user.get().getPassword())) {
            throw new IllegalStateException("Bad credentials!");
        }

        return new UserDTO(user.get().getEmail(), user.get().getUsername(), user.get().getRole());
    }

}
