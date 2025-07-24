package com.example.backend.Authentication;

import com.example.backend.Customer.Customer;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    public void login(Customer c) {
        System.out.println(c);
    }

    public void register(Customer c) {
        System.out.println(c);
    }

}
