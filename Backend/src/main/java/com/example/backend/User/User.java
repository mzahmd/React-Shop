package com.example.backend.User;

import com.example.backend.Order.Order;

import java.util.List;

public class User {
    int id;
    String email;
    String password;
    Role role;
    List<Order> orders;

    public User(int id, String email, String password, Role role, List<Order> orders) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.orders = orders;
    }

    public User(int id, String email, String password, Role role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public User(String email, String password, Role role, List<Order> orders) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.orders = orders;
    }

    public User(String email, String password, Role role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    @Override
    public String toString() {
        return "Customer{" + "id=" + id + ", email=" + email + ", role=" + role + "}";
    }
}
