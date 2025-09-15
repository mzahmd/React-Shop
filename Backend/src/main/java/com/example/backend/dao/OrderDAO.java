package com.example.backend.dao;

import com.example.backend.model.Order;

import java.util.List;

public interface OrderDAO {
    List<Order> getOrdersFromUser(int userId);
    void createOrder(List<Order> order);
}
