package com.example.backend.dao.impl;

import com.example.backend.dao.UserDAO;
import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Qualifier("List")
public class UserListDataAccessService implements UserDAO {
    private final List<User> USERS = new ArrayList<>();

    @Override
    public void registerUser(User registerUser) {
        USERS.add(registerUser);
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return USERS.stream()
                .filter(user -> user.getEmail().equalsIgnoreCase(email))
                .findFirst();
    }

    @Override
    public Optional<User> findUserById(int id) {
        return USERS.stream()
                .filter(user -> user.getId() == id)
                .findFirst();
    }

    @Override
    public List<User> getAllUsers() {
        return USERS;
    }

    @Override
    public void deleteUserByEmail(String email) {
        USERS.removeIf(user -> user.getEmail().equalsIgnoreCase(email));
    }

    @Override
    public void deleteAuthenticatedUser(UserDTO userDTO) {
        USERS.removeIf(user -> user.getEmail().equalsIgnoreCase(userDTO.getEmail()));
    }

}
