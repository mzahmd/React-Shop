package com.example.backend.Admin;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    UserDAO userDAO;

    public AdminService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    public void deleteUserByEmail(String email) {
        if (userDAO.findUserByEmail(email).isEmpty()) {
            throw new IllegalStateException("User doesn't exists!");
        }

        userDAO.deleteUserByEmail(email);
    }
}
