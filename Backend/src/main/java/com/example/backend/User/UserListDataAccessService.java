package com.example.backend.User;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserListDataAccessService implements UserDAO {

    private static final List<User> USERS = new ArrayList<User>();
    private static final Logger logger = LoggerFactory.getLogger(UserListDataAccessService.class);

    @Override
    public void registerCustomer(User registerUser) {
        USERS.add(registerUser);
        logger.info(USERS.toString());
    }

    @Override
    public Optional<User> findCustomerByEmail(String email) {
        return USERS.stream()
                .filter(customer -> customer.email.equals(email))
                .findFirst();
    }

    @Override
    public List<User> getAllCustomers() {
        return USERS;
    }
}
