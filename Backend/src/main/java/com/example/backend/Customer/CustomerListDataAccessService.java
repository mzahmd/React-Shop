package com.example.backend.Customer;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerListDataAccessService implements CustomerDAO {

    private static final List<Customer> customers = new ArrayList<Customer>();

    @Override
    public void registerCustomer(Customer c) {
        customers.add(c);
    }

    @Override
    public Optional<Customer> findCustomerByEmail(Customer c) {
        return customers.stream()
                .filter(customer -> customer.email.equals(c.email))
                .findFirst();
    }
}
