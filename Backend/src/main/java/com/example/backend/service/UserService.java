package com.example.backend.service;

import com.example.backend.dao.UserDAO;
import com.example.backend.dto.UserDTO;
import com.example.backend.dto.UserRequestDTO;
import com.example.backend.enums.Role;
import com.example.backend.mapper.UserMapper;
import com.example.backend.model.User;
import com.example.backend.utils.SecurityContextUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    private static int id = 1;
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(@Qualifier("JPA") UserDAO userDAO, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    public UserDTO getAuthenticatedUser() {
        return SecurityContextUtils.getCurrentUser();
    }

    public boolean isUserAuthenticated() {
        return SecurityContextUtils.isUserContextAuthenticated();
    }

    public void register(UserRequestDTO userRequestDTO) {
        if (userDAO.findUserByEmail(userRequestDTO.getEmail()).isPresent()) {
            throw new IllegalStateException("User already exists!");
        }

        User registerUser = userMapper.toUser(userRequestDTO);
        registerUser.setId(id);
        registerUser.setPassword(passwordEncoder.encode(userRequestDTO.getPassword()));
        registerUser.setRole(Role.USER);

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
