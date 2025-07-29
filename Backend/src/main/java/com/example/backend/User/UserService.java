package com.example.backend.User;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllCustomers() {
        return userDAO.getAllUsers();
    }

    public void register(User registerUser) {
        if (userDAO.findUserByEmail(registerUser.getEmail()).isPresent()) {
            throw new IllegalStateException("Customer already exists!");
        }

        userDAO.registerUser(new User(registerUser.getEmail(), passwordEncoder.encode(registerUser.getPassword()), Roles.ROLE_USER));
    }
}
