package com.example.backend.controller;

import com.example.backend.dto.AuthenticationRequestDTO;
import com.example.backend.service.AuthenticationService;
import com.example.backend.dto.UserDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody AuthenticationRequestDTO authenticationRequestDTO, HttpServletRequest request) {
        UserDTO userDTO = authenticationService.login(authenticationRequestDTO, request);

        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        authenticationService.logout(request, response);
    }

}
