package com.example.backend.Customer;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class CustomerListDataAccessService implements CustomerDAO {

    private static final List<Customer> customers = new ArrayList<Customer>();
    private static final Logger logger = LoggerFactory.getLogger(CustomerListDataAccessService.class);

    @Override
    public void registerCustomer(Customer registerCustomer) {
        customers.add(registerCustomer);
        logger.info(customers.toString());
    }

    @Override
    public Optional<Customer> findCustomerByEmail(String email) {
        return customers.stream()
                .filter(customer -> customer.email.equals(email))
                .findFirst();
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customers;
    }
}
