package com.example.backend.User;

import java.util.List;
import java.util.Optional;

public interface UserDAO {

    void registerUser(User newUser);
    Optional<User> findUserByEmail(String email);
    List<User> getAllUsers();
    void deleteUserByEmail(String email);
    void deleteAuthenticatedUser(UserDTO user);
}
