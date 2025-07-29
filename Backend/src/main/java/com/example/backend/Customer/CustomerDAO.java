package com.example.backend.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerDAO {

    void registerCustomer(Customer newCustomer);
    Optional<Customer> findCustomerByEmail(String email);
    List<Customer> getAllCustomers();
}
