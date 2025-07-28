package com.example.backend.Authentication;

import com.example.backend.Customer.Customer;
import com.example.backend.Customer.CustomerDAO;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final CustomerDAO customerDAO;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationService(CustomerDAO customerDAO, PasswordEncoder passwordEncoder) {
        this.customerDAO = customerDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(Customer registerCustomer) {
        if (customerDAO.findCustomerByEmail(registerCustomer.getEmail()).isPresent()) {
            throw new IllegalStateException("Customer already exists!");
        }

        customerDAO.registerCustomer(new Customer(registerCustomer.getEmail(), passwordEncoder.encode(registerCustomer.getPassword())));
    }

    public void login(Customer logCustomer) {
        Optional<Customer> customer = customerDAO.findCustomerByEmail(logCustomer.getEmail());

        if (customer.isEmpty()) {
            throw new IllegalStateException("Customer doesn't exists!");
        }

        if (!passwordEncoder.matches(logCustomer.getPassword(), customer.get().getPassword())) {
            throw new IllegalStateException("Bad credentials!");
        }
    }

}
