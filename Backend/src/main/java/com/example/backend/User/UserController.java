package com.example.backend.User;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public void deleteUser(@RequestParam("email") String email) {
        userService.deleteUser(email);
    }
}
