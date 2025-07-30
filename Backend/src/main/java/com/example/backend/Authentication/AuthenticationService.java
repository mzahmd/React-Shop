package com.example.backend.Authentication;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
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

    public void login(User authUser) {
        Optional<User> user = userDAO.findUserByEmail(authUser.getEmail());

        if (user.isEmpty()) {
            throw new IllegalStateException("Customer doesn't exists!");
        }

        if (!passwordEncoder.matches(authUser.getPassword(), user.get().getPassword())) {
            throw new IllegalStateException("Bad credentials!");
        }
    }

}
