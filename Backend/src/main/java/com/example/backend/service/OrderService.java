package com.example.backend.service;

import com.example.backend.dao.OrderDAO;
import com.example.backend.dao.UserDAO;
import com.example.backend.dto.OrderRequestDTO;
import com.example.backend.dto.UserDTO;
import com.example.backend.mapper.OrderMapper;
import com.example.backend.model.Order;
import com.example.backend.model.User;
import com.example.backend.utils.SecurityContextUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderDAO orderDAO;
    private final UserDAO userDAO;
    private final OrderMapper orderMapper;

    public OrderService(@Qualifier("JPA") OrderDAO orderDAO, @Qualifier("JPA") UserDAO userDAO, OrderMapper orderMapper) {
        this.orderDAO = orderDAO;
        this.userDAO = userDAO;
        this.orderMapper = orderMapper;
    }

    public List<Order> getOrdersFromUser() {
        UserDTO userDTO = SecurityContextUtils.getCurrentUser();
        User user = userDAO.findUserByEmail(userDTO.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        return orderDAO.getOrdersFromUser(user.getId());
    }

    public void createOrder(List<OrderRequestDTO> orderRequestDTO) {
        UserDTO userDTO = SecurityContextUtils.getCurrentUser();
        User user = userDAO.findUserByEmail(userDTO.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        List<Order> orders = orderRequestDTO.stream()
                .map(order -> orderMapper.toOrder(order, user))
                .toList();

        orderDAO.createOrder(orders);
    }
}
