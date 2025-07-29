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

    public void login(User logUser) {
        Optional<User> customer = userDAO.findCustomerByEmail(logUser.getEmail());

        if (customer.isEmpty()) {
            throw new IllegalStateException("Customer doesn't exists!");
        }

        if (!passwordEncoder.matches(logUser.getPassword(), customer.get().getPassword())) {
            throw new IllegalStateException("Bad credentials!");
        }
    }

}
