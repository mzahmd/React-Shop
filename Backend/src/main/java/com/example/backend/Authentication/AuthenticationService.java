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

    public boolean login(Customer c) {
        return customerDAO.loginCustomer(c);
    }

    public void register(Customer c) {
        customerDAO.registerCustomer(c);
    }

}
