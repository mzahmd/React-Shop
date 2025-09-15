package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.UserRequest;
import com.example.backend.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserDTO getAuthenticatedUser() {
        return userService.getAuthenticatedUser();
    }

    @GetMapping("/authenticated")
    public boolean isUserAuthenticated() {
        return userService.isUserAuthenticated();
    }

    @PostMapping("/register")
    public void register(@RequestBody UserRequest userRequest) {
        userService.register(userRequest);
    }

    @DeleteMapping
    public void deleteUser(HttpServletRequest request, HttpServletResponse  response) {
        userService.deleteAuthenticatedUser(request, response);
    }

}
