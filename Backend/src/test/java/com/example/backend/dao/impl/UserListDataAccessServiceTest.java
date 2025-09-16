package com.example.backend.dao.impl;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.types.Role;
import com.example.backend.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class UserListDataAccessServiceTest {

    UserListDataAccessService underTest;

    @BeforeEach
    void setup() {
        underTest = new UserListDataAccessService();
    }

    @Test
    public void shouldRegisterOneUser() {
        // Given
        User user = new User(1,"admin@example.com", "password", Role.ADMIN);

        // When
        underTest.registerUser(user);

        // Then
        assertTrue(underTest.getAllUsers().contains(user));
        assertEquals(1, underTest.getAllUsers().size());
    }

    @Test
    public void shouldFindUserByEmail() {
        // Given
        User user = new User(1, "admin@example.com", "password", Role.ADMIN);
        underTest.registerUser(user);

        // When
        Optional<User> response = underTest.findUserByEmail(user.getEmail());

        // Then
        assertTrue(response.isPresent());
        assertEquals(user.getEmail(), response.get().getEmail());
        assertEquals(user.getRole(), response.get().getRole());

    }

    @Test
    public void shouldGetAllUsers() {
        // Given
        User user1 = new User(1, "admin@example.com", "password", Role.ADMIN);
        User user2 = new User(1, "user@example.com", "password123", Role.USER);
        underTest.registerUser(user1);
        underTest.registerUser(user2);

        // When
        Optional<User> optionalUser1 = underTest.findUserByEmail(user1.getEmail());
        Optional<User> optionalUser2 = underTest.findUserByEmail(user2.getEmail());

        // Then
        assertEquals(2, underTest.getAllUsers().size());
        assertTrue(optionalUser1.isPresent());
        assertEquals(user1.getEmail(), optionalUser1.get().getEmail());
        assertEquals(user1.getRole(), optionalUser1.get().getRole());
        assertTrue(optionalUser2.isPresent());
        assertEquals(user2.getEmail(), optionalUser2.get().getEmail());
        assertEquals(user2.getRole(), optionalUser2.get().getRole());
    }

    @Test
    public void shouldDeleteUserByEmail() {
        // Given
        User user = new User(1, "admin@example.com", "password", Role.ADMIN);
        underTest.registerUser(user);

        // When
        underTest.deleteUserByEmail(user.getEmail());

        // Then
        assertEquals(0, underTest.getAllUsers().size());
    }

    @Test
    public void shouldDeleteAuthenticatedUser() {
        // Given
        UserDTO userDTO = new UserDTO("admin@example.com", Role.ADMIN);
        underTest.registerUser(new User(1, userDTO.getEmail(), "password", userDTO.getRole()));

        // When
        underTest.deleteAuthenticatedUser(userDTO);

        // Then
        assertEquals(0, underTest.getAllUsers().size());
    }
}
