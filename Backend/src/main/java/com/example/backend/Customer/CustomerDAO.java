package com.example.backend.Customer;

public interface CustomerDAO {

    void registerCustomer(Customer c);
    boolean loginCustomer(Customer c);
}
