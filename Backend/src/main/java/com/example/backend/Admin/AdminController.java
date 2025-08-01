package com.example.backend.Admin;

import com.example.backend.User.User;
import com.example.backend.User.UserDTO;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/user")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<UserDTO> getAllUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/user")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteAdmin(@RequestParam("email") String email) {
        adminService.deleteUserByEmail(email);
    }
}
