package com.example.backend.controller;

import com.example.backend.service.AdminService;
import com.example.backend.dto.UserDTO;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@PreAuthorize("hasAuthority('ADMIN')")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/user") // ?email=
    public UserDTO getUser(@RequestParam(name = "email") String email) {
        return adminService.getUserByEmail(email);
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestParam(name = "email") String email) {
        adminService.deleteUserByEmail(email);
    }
}
