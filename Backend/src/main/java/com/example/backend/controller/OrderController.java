package com.example.backend.controller;

import com.example.backend.dto.OrderDTO;
import com.example.backend.dto.OrderRequestDTO;
import com.example.backend.service.OrderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<OrderDTO> getOrdersFromUser() {
        return orderService.getOrdersFromUser();
    }

    @PostMapping
    public void createOrder(@RequestBody List<OrderRequestDTO> orderRequestDTO) {
        orderService.createOrder(orderRequestDTO);
    }
}
