package com.example.backend.Authentication;

import com.example.backend.Customer.Customer;
import com.example.backend.Customer.CustomerDAO;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final CustomerDAO customerDAO;

    public AuthenticationService(CustomerDAO customerDAO) {
        this.customerDAO = customerDAO;
    }

    public void login(Customer c) {
        customerDAO.registerCustomer(c);
    }

    public boolean register(Customer c) {
        return customerDAO.loginCustomer(c);
    }

}
