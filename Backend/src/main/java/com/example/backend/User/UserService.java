package com.example.backend.User;

import com.example.backend.utils.SecurityContextUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    private static int id = 1;
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTO getAuthenticatedUser() {
        return SecurityContextUtils.getCurrentUser();
    }

    public boolean isUserAuthenticated() {
        return SecurityContextUtils.isUserContextAuthenticated();
    }

    public void register(UserRequest userRequest) {
        if (userDAO.findUserByEmail(userRequest.email()).isPresent()) {
            throw new IllegalStateException("User already exists!");
        }

        User registerUser = new User(
                id,
                userRequest.email(),
                passwordEncoder.encode(userRequest.password()),
                Role.USER
        );

        userDAO.registerUser(registerUser);

        id++;
        logger.info("User registered successfully!");
    }

    public void deleteAuthenticatedUser(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextUtils.getSecurityContextAuthentication();
        UserDTO userDTO = SecurityContextUtils.getCurrentUser(authentication);

        userDAO.deleteAuthenticatedUser(userDTO);

        SecurityContextLogoutHandler securityContextLogoutHandler = new SecurityContextLogoutHandler();

        securityContextLogoutHandler.logout(request, response, authentication);
    }

}
