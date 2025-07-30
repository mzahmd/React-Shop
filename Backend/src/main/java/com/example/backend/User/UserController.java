package com.example.backend.User;

import org.springframework.security.access.prepost.PreAuthorize;
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
    public void register(@RequestBody User registerUser) {
        userService.register(registerUser);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(@RequestParam("email") String email) {
        userService.deleteUser(email);
    }
}
