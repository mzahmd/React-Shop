package com.example.backend.User;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

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
    }

    public void deleteAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl userDetails)) {
            throw new IllegalStateException("No authenticated User");
        }

        UserDTO userDTO = new UserDTO(userDetails.getUsername(), userDetails.getRole());

        userDAO.deleteAuthenticatedUser(userDTO);

        SecurityContextHolder.clearContext();
    }

}
