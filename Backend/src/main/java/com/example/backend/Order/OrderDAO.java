package com.example.backend.Order;

import java.util.List;

public interface OrderDAO {
    List<Order> getOrdersFromUser(int userId);
    void createOrder(List<Order> order);
}
