package com.example.backend.Order;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Qualifier("JPA")
public class OrderJPADataAccessService implements OrderDAO {
    OrderRepository orderRepository;

    public OrderJPADataAccessService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    @Override
    public List<Order> getOrdersFromUser(int userId) {
        return List.of();
    }

    @Override
    public void createOrder(List<Order> order) {

    }
}
