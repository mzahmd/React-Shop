package com.example.backend.WebConfig;

import com.example.backend.User.Role;
import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminUserInitializer {

    @Bean
    public CommandLineRunner commandLineRunner(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        return args -> {
            userDAO.registerUser(new User(
                    "admin@example.com",
                    passwordEncoder.encode("password"),
                    Role.ADMIN
            ));
        };
    }
}
