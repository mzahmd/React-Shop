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

    public UserDTO getUserByEmail(String email) {
        Optional<User> user = userDAO.findUserByEmail(email);
        if (user.isEmpty()) {
            throw new IllegalStateException("User already exists!");
        }

        return new UserDTO(user.get().getEmail(), user.get().getRole());
    }

    public void register(UserRequest userRequest) {
        if (userDAO.findUserByEmail(userRequest.email()).isPresent()) {
            throw new IllegalStateException("User already exists!");
        }

        userDAO.registerUser(new User(
                userRequest.email(),
                passwordEncoder.encode(userRequest.password()),
                Roles.USER)
        );
    }

}
