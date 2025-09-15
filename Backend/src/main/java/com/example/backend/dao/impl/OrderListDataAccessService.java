package com.example.backend.dao.impl;

import com.example.backend.dao.OrderDAO;
import com.example.backend.model.Order;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Qualifier("List")
public class OrderListDataAccessService implements OrderDAO {
    private final List<Order> orders = new ArrayList<>();

    @Override
    public List<Order> getOrdersFromUser(int userId) {
        return orders.stream()
                .filter(order -> order.getUser().getId() == userId)
                .collect(Collectors.toList());
    }

    @Override
    public void createOrder(List<Order> order) {
        orders.addAll(order);
    }

}
