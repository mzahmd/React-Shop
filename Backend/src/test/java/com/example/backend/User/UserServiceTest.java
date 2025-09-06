package com.example.backend.User;

import com.example.backend.mapper.UserMapper;
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

    @Mock
    UserMapper usermapper;

    @Test
    void shouldRegisterUser() {
        // Given
        UserRequest userRequest = new UserRequest("user@example.com", "password");
        final String encodedPassword = "encodedPassword";

        User returnedUser = new User(1, "user@example.com", "password", Role.USER);

        when(userDAO.findUserByEmail(userRequest.getEmail())).thenReturn(Optional.empty());
        when(passwordEncoder.encode(userRequest.getPassword())).thenReturn(encodedPassword);
        when(usermapper.toUser(userRequest)).thenReturn(returnedUser);

        // When
        underTest.register(userRequest);

        // Then
        verify(userDAO, times(1)).findUserByEmail(userRequest.getEmail());
        verify(passwordEncoder, times(1)).encode(userRequest.getPassword());
        verify(userDAO).registerUser(argThat(user ->
                user.getEmail().equals(userRequest.getEmail()) &&
                        user.getPassword().equals(encodedPassword) &&
                        user.getRole() == Role.USER
        ));

    }
}
