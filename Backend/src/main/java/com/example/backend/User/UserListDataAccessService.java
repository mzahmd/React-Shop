package com.example.backend.User;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserListDataAccessService implements UserDAO {

    private static final List<User> USERS = new ArrayList<User>();
    private static final Logger logger = LoggerFactory.getLogger(UserListDataAccessService.class);

    @Override
    public void registerUser(User registerUser) {
        USERS.add(registerUser);
        logger.info(USERS.toString());
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return USERS.stream()
                .filter(user -> user.email.equalsIgnoreCase(email))
                .findFirst();
    }

    @Override
    public List<User> getAllUsers() {
        logger.info(USERS.toString());
        return USERS;
    }

    @Override
    public void deleteUserByEmail(String email) {
        USERS.removeIf(user -> user.email.equalsIgnoreCase(email));
    }

    @Override
    public void deleteAuthenticatedUser(UserDTO userDTO) {
        USERS.removeIf(user -> user.email.equalsIgnoreCase(userDTO.email()));
        logger.info(USERS.toString());
    }
}
