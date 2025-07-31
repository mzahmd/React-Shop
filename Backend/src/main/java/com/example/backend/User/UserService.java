package com.example.backend.User;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public User getUserByEmail(String email) {
        Optional<User> user = userDAO.findUserByEmail(email);
        if (user.isEmpty()) {
            throw new IllegalStateException("User already exists!");
        }

        return user.get();
    }

    public void register(User registerUser) {
        if (userDAO.findUserByEmail(registerUser.getEmail()).isPresent()) {
            throw new IllegalStateException("User already exists!");
        }

        userDAO.registerUser(new User(
                registerUser.getEmail(),
                passwordEncoder.encode(registerUser.getPassword()),
                Roles.USER)
        );
    }

}
