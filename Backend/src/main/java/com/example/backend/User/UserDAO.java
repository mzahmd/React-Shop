package com.example.backend.User;

import java.util.List;
import java.util.Optional;

public interface UserDAO {

    void registerCustomer(User newUser);
    Optional<User> findCustomerByEmail(String email);
    List<User> getAllCustomers();
}
