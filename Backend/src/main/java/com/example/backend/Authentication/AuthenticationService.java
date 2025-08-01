package com.example.backend.Authentication;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDTO;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final UserDAO userDAO;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserDAO userDAO, AuthenticationManager authenticationManager) {
        this.userDAO = userDAO;
        this.authenticationManager = authenticationManager;
    }

    public UserDTO login(AuthenticationRequest authenticationRequest) {
        Optional<User> user = userDAO.findUserByEmail(authenticationRequest.email());

        Authentication authToken = UsernamePasswordAuthenticationToken.unauthenticated(authenticationRequest.email(), authenticationRequest.password());
        Authentication authenticationResponse = authenticationManager.authenticate(authToken);

        SecurityContextHolder.getContext().setAuthentication(authenticationResponse);

        return new UserDTO(authenticationRequest.email(), user.get().getRole());
    }

}
