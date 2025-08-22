package com.example.backend.User;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @InjectMocks
    UserService underTest;

    @Mock
    UserDAO userDAO;

    @Mock
    PasswordEncoder passwordEncoder;

    @Test
    void shouldRegisterUser() {
        // Given
        UserRequest userRequest = new UserRequest("user@example.com", "password");
        final String encodedPassword = "encodedPassword";

        when(userDAO.findUserByEmail(userRequest.email())).thenReturn(Optional.empty());
        when(passwordEncoder.encode(userRequest.password())).thenReturn(encodedPassword);

        // When
        underTest.register(userRequest);

        // Then
        verify(userDAO, times(1)).findUserByEmail(userRequest.email());
        verify(passwordEncoder, times(1)).encode(userRequest.password());
        verify(userDAO).registerUser(argThat(user ->
                user.getEmail().equals(userRequest.email()) &&
                        user.getPassword().equals(encodedPassword) &&
                        user.getRole() == Role.USER
        ));

    }
}
