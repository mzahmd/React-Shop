package com.example.backend.Authentication;

import com.example.backend.User.UserDTO;
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
    public ResponseEntity<UserDTO> login(@RequestBody AuthenticationRequest request) {
        UserDTO userDTO = authenticationService.login(request);

        return new ResponseEntity<UserDTO>(userDTO, HttpStatus.OK);
    }

}
