package com.example.backend.Order;

import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDetailsImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderDAO orderDAO;
    private final UserDAO userDAO;

    public OrderService(OrderDAO orderDAO, UserDAO userDAO) {
        this.orderDAO = orderDAO;
        this.userDAO = userDAO;
    }

    public List<Order> getOrdersFromUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalArgumentException("Authentication required");
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        Optional<User> user = userDAO.findUserByEmail(userDetails.getUsername());

        if (user.isEmpty()) {
            throw new IllegalArgumentException("User not found");
        }

        return orderDAO.getOrdersFromUser(user.get().getId());
    }

    public void createOrder(List<OrderRequest> orderRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalArgumentException("Authentication required");
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        User user = userDAO.findUserByEmail(userDetails.getUsername()).orElseThrow(() -> new IllegalArgumentException("User not found"));

        List<Order> orders = orderRequest.stream()
                .map(order -> new Order(user, order.getProduct(), order.quantity))
                .toList();

        orderDAO.createOrder(orders);
    }
}
