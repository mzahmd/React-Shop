package com.example.backend.Admin;

import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {
    UserDAO userDAO;

    public AdminService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public List<UserDTO> getAllUsers() {
        return userDAO.getAllUsers().stream()
                .map(user -> new UserDTO(user.getEmail(), user.getRole()))
                .collect(Collectors.toList());
    }

    public void deleteUserByEmail(String email) {
        if (userDAO.findUserByEmail(email).isEmpty()) {
            throw new IllegalStateException("User doesn't exists!");
        }

        userDAO.deleteUserByEmail(email);
    }
}
