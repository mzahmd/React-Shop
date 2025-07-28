package com.example.backend.Customer;

import java.util.Optional;

public interface CustomerDAO {

    void registerCustomer(Customer newCustomer);
    Optional<Customer> findCustomerByEmail(String email);
}
