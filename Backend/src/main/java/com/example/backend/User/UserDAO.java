package com.example.backend.User;

import com.example.backend.Order.Order;

import java.util.List;
import java.util.Optional;

public interface UserDAO {
    void registerUser(User newUser);
    Optional<User> findUserByEmail(String email);
    Optional<User> findUserById(int id);
    List<User> getAllUsers();
    void deleteUserByEmail(String email);
    void deleteAuthenticatedUser(UserDTO user);
    void addOrder(User user, Order order);
}
