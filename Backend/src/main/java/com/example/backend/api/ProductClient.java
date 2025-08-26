package com.example.backend.api;

import com.example.backend.Product.Product;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Component
public class ProductClient {

    private final WebClient webClient;

    public ProductClient(@Value("#{'${product.url}'}") String PRODUCT_URL, WebClient.Builder builder) {
        this.webClient = builder.baseUrl(PRODUCT_URL).build();
    }

    public Flux<Product> getAllProducts() {
        return webClient.get()
                .retrieve()
                .bodyToFlux(Product.class);
    }
}
