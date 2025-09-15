package com.example.backend.initializer;

import com.example.backend.model.types.Role;
import com.example.backend.model.User;
import com.example.backend.dao.UserDAO;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminUserInitializer {

    @Bean
    public CommandLineRunner commandLineRunner(@Qualifier("JPA") UserDAO userDAO, PasswordEncoder passwordEncoder) {
        return args -> {
            userDAO.registerUser(new User(
                    0,
                    "admin@example.com",
                    passwordEncoder.encode("password"),
                    Role.ADMIN
            ));
        };
    }
}
