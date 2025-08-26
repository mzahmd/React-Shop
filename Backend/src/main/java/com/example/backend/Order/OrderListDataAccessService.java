package com.example.backend.Order;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderListDataAccessService implements OrderDAO {
    private final List<Order> orders = new ArrayList<>();

    @Override
    public List<Order> getOrdersFromUser(int userId) {
        return orders.stream()
                .filter(order -> order.getUser().getId() == userId)
                .collect(Collectors.toList());
    }

    @Override
    public void createOrder(Order order) {
        orders.add(order);
    }

}
