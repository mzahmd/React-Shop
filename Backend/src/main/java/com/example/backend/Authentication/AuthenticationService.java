package com.example.backend.Authentication;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDTO;
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

    public UserDTO login(AuthenticationRequest request) {
        Optional<User> user = userDAO.findUserByEmail(request.email());

        if (user.isEmpty() || !passwordEncoder.matches(request.password(), user.get().getPassword())) {
            throw new IllegalStateException("Bad credentials!");
        }

        return new UserDTO(user.get().getEmail(), user.get().getUsername(), user.get().getRole());
    }

}
