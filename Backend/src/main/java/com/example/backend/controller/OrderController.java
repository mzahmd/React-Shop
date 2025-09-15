package com.example.backend.controller;

import com.example.backend.model.Order;
import com.example.backend.dto.OrderRequestDTO;
import com.example.backend.service.OrderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/order")
    public List<Order> getOrdersFromUser() {
        return orderService.getOrdersFromUser();
    }

    @PostMapping("/order")
    public void createOrder(@RequestBody List<OrderRequestDTO> orderRequestDTO) {
        orderService.createOrder(orderRequestDTO);
    }
}
