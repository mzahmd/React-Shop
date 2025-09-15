package com.example.backend.utils;

import com.example.backend.dto.UserDTO;
import com.example.backend.userdetails.UserDetailsImpl;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityContextUtils {

    public static Authentication getSecurityContextAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public static boolean isUserContextAuthenticated() {
        Authentication authentication = getSecurityContextAuthentication();

        return authentication != null
                && authentication.isAuthenticated()
                && !(authentication instanceof AnonymousAuthenticationToken);
    }

    public static boolean isUserContextAuthenticated(Authentication authentication) {

        return authentication != null
                && authentication.isAuthenticated()
                && !(authentication instanceof AnonymousAuthenticationToken);
    }

    public static UserDTO getCurrentUser() {
        Authentication authentication = getSecurityContextAuthentication();

        if (!isUserContextAuthenticated(authentication)) {
            throw new SecurityException("User is not authenticated");
        }

        if (!(authentication.getPrincipal() instanceof UserDetailsImpl userDetails)) {
            throw new SecurityException("Authentication is not an instance of UserDetailsImpl");
        }

        return new UserDTO(userDetails.getUsername(), userDetails.getRole());
    }

    public static UserDTO getCurrentUser(Authentication authentication) {

        if (!isUserContextAuthenticated(authentication)) {
            throw new SecurityException("User is not authenticated");
        }

        if (!(authentication instanceof UserDetailsImpl userDetails)) {
            throw new SecurityException("Authentication is not an instance of UserDetailsImpl");
        }

        return new UserDTO(userDetails.getUsername(), userDetails.getRole());
    }

}
