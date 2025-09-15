package com.example.backend.service;

import com.example.backend.dao.UserDAO;
import com.example.backend.dto.UserRequestDTO;
import com.example.backend.enums.Role;
import com.example.backend.mapper.UserMapper;
import com.example.backend.model.User;
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
        UserRequestDTO userRequestDTO = new UserRequestDTO("user@example.com", "password");
        final String encodedPassword = "encodedPassword";

        User returnedUser = new User(1, "user@example.com", "password", Role.USER);

        when(userDAO.findUserByEmail(userRequestDTO.getEmail())).thenReturn(Optional.empty());
        when(passwordEncoder.encode(userRequestDTO.getPassword())).thenReturn(encodedPassword);
        when(usermapper.toUser(userRequestDTO)).thenReturn(returnedUser);

        // When
        underTest.register(userRequestDTO);

        // Then
        verify(userDAO, times(1)).findUserByEmail(userRequestDTO.getEmail());
        verify(passwordEncoder, times(1)).encode(userRequestDTO.getPassword());
        verify(userDAO).registerUser(argThat(user ->
                user.getEmail().equals(userRequestDTO.getEmail()) &&
                        user.getPassword().equals(encodedPassword) &&
                        user.getRole() == Role.USER
        ));

    }
}
