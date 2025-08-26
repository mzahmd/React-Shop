package com.example.backend.Product;

import com.example.backend.api.ProductClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
public class ProductService {

    private final ProductClient productClient;

    public ProductService(ProductClient productClient) {
        this.productClient = productClient;
    }

    public Flux<Product> getAllProducts(String category) {

        if (!category.isEmpty()) {
            return productClient.getAllProducts()
                    .filter(product -> product.getCategory().equals(category));
        }

        return productClient.getAllProducts();
    }
}
