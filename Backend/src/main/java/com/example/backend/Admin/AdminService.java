package com.example.backend.Admin;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDTO;
import com.example.backend.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {
    private final UserDAO userDAO;
    private final UserMapper userMapper;

    public AdminService(@Qualifier("JPA") UserDAO userDAO, UserMapper userMapper) {
        this.userDAO = userDAO;
        this.userMapper = userMapper;
    }

    public List<UserDTO> getAllUsers() {
        return userDAO.getAllUsers().stream()
                .map(userMapper::toUserDTO)
                .collect(Collectors.toList());
    }

    public UserDTO getUserByEmail(String email) {
        User user = userDAO.findUserByEmail(email)
                .orElseThrow(() -> new IllegalStateException("User not found"));

    return userMapper.toUserDTO(user);
    }

    public void deleteUserByEmail(String email) {
        if (userDAO.findUserByEmail(email).isEmpty()) {
            throw new IllegalStateException("User doesn't exists!");
        }

        userDAO.deleteUserByEmail(email);
    }

}
