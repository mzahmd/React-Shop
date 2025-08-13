package com.example.backend.User;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTO getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new UsernameNotFoundException("Your not logged in");
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return new UserDTO(userDetails.getUsername(), userDetails.getRole());
    }

    public boolean isUserAuthenticated() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        return authentication != null && authentication.isAuthenticated();
    }

    public void register(UserRequest userRequest) {
        if (userDAO.findUserByEmail(userRequest.email()).isPresent()) {
            throw new IllegalStateException("User already exists!");
        }

        userDAO.registerUser(new User(
                userRequest.email(),
                passwordEncoder.encode(userRequest.password()),
                Role.USER)
        );

        logger.info("User registered successfully!");
    }

    public void deleteAuthenticatedUser(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl userDetails)) {
            throw new IllegalStateException("No authenticated User");
        }

        UserDTO userDTO = new UserDTO(userDetails.getUsername(), userDetails.getRole());

        userDAO.deleteAuthenticatedUser(userDTO);

        new SecurityContextLogoutHandler().logout(request, response, authentication);
    }

}
