package com.example.backend.Product;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Value("#{'${product.url}'}")
    private String PRODUCT_URL;

    @GetMapping
    public Mono<List<Product>> getProducts() {
        WebClient.Builder builder = WebClient.builder();

        return builder.build()
                .get()
                .uri(PRODUCT_URL)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToFlux(Product.class)
                .collectList();
    }
}
