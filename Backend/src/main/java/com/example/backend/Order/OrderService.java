package com.example.backend.Order;

import com.example.backend.Product.Product;
import com.example.backend.User.User;
import com.example.backend.User.UserDAO;
import com.example.backend.User.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderDAO orderDAO;
    private final UserDAO userDAO;

    @Value("#{'${product.url}'}")
    private String PRODUCT_URL;

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

    public void createOrder(OrderRequest orderRequest) {

        User user = userDAO.findUserById(orderRequest.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        WebClient.Builder builder = WebClient.builder();

        Mono<List<Product>> productList = builder.build()
                .get()
                .uri(PRODUCT_URL)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToFlux(Product.class)
                .filter(product -> product.getId() == orderRequest.getProductId())
                .collectList();

        List<Product> products = productList.block();
        Product product = products != null && !products.isEmpty() ? products.get(0) : null;

        Order order = new Order(user, product, orderRequest.getQuantity());

        orderDAO.createOrder(order);
    }
}
