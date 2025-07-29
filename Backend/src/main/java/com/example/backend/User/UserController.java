package com.example.backend.User;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllCustomers() {
        return userService.getAllCustomers();
    }

    @PostMapping("/register")
    public void register(@RequestBody User newCustomer) {
        userService.register(newCustomer);
    }
}
