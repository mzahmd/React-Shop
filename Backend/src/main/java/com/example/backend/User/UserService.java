package com.example.backend.User;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public List<User> getAllCustomers() {
        return userDAO.getAllCustomers();
    }
}
