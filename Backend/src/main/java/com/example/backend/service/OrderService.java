package com.example.backend.service;

import com.example.backend.model.Order;
import com.example.backend.dao.OrderDAO;
import com.example.backend.dto.OrderRequest;
import com.example.backend.model.User;
import com.example.backend.dao.UserDAO;
import com.example.backend.dto.UserDTO;
import com.example.backend.utils.SecurityContextUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderDAO orderDAO;
    private final UserDAO userDAO;

    public OrderService(@Qualifier("JPA") OrderDAO orderDAO, @Qualifier("JPA") UserDAO userDAO) {
        this.orderDAO = orderDAO;
        this.userDAO = userDAO;
    }

    public List<Order> getOrdersFromUser() {
        UserDTO userDTO = SecurityContextUtils.getCurrentUser();
        User user = userDAO.findUserByEmail(userDTO.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        return orderDAO.getOrdersFromUser(user.getId());
    }

    public void createOrder(List<OrderRequest> orderRequest) {
        UserDTO userDTO = SecurityContextUtils.getCurrentUser();
        User user = userDAO.findUserByEmail(userDTO.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        List<Order> orders = orderRequest.stream()
                .map(order -> new Order(user, order.getProductId(), order.quantity))
                .toList();

        orderDAO.createOrder(orders);
    }
}
