package com.example.backend.Authentication;

import com.example.backend.User.UserDTO;
import com.example.backend.User.UserDetailsImpl;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    public UserDTO login(AuthenticationRequest authenticationRequest, HttpServletRequest request) {
        Authentication token = UsernamePasswordAuthenticationToken.unauthenticated(authenticationRequest.email(), authenticationRequest.password());
        Authentication authentication = authenticationManager.authenticate(token);

        UserDetailsImpl loggedUser = (UserDetailsImpl) authentication.getPrincipal();

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);
        SecurityContextHolder.setContext(context);

        HttpSession session = request.getSession(true);
        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, context);

        return new UserDTO(loggedUser.getUsername(), loggedUser.getRole());
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        SecurityContextLogoutHandler securityContextLogoutHandler = new SecurityContextLogoutHandler();

        securityContextLogoutHandler.logout(request, response, SecurityContextHolder.getContext().getAuthentication());
    }

}
