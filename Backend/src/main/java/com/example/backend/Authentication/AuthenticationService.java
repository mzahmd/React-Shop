package com.example.backend.Authentication;

import com.example.backend.Customer.Customer;
import com.example.backend.Customer.CustomerDAO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final CustomerDAO customerDAO;

    public AuthenticationService(CustomerDAO customerDAO) {
        this.customerDAO = customerDAO;
    }

    public void register(Customer c) {
        if (customerDAO.findCustomerByEmail(c).isPresent()) {
            throw new IllegalStateException("Customer already exists!");
        }

        customerDAO.registerCustomer(c);
    }

    public void login(Customer c) {
        Optional<Customer> customer = customerDAO.findCustomerByEmail(c);

        if (customer.isEmpty()) {
            throw new IllegalStateException("Customer doesn't exists!");
        }

        if(!customer.get().getPassword().equals(c.getPassword())) {
            throw new IllegalStateException("Bad credentials!");
        }
    }

}
