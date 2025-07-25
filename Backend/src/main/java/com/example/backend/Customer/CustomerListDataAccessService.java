package com.example.backend.Customer;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerListDataAccessService implements CustomerDAO {

    private static final List<Customer> customers = new ArrayList<Customer>();

    @Override
    public void registerCustomer(Customer c) {
        customers.add(new Customer("John", "Doe"));
    }

    @Override
    public boolean loginCustomer(Customer c) {
        return customers.stream().anyMatch(customer -> customer.password.equals(c.password));
    }
}
