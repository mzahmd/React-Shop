package com.example.backend.Customer;

import java.util.Optional;

public interface CustomerDAO {

    void registerCustomer(Customer c);
    Optional<Customer> findCustomerByEmail(Customer c);
}
