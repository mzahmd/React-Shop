package com.example.backend.Order;

import com.example.backend.Product.Product;

public class OrderRequest {
    public Product product;
    public int quantity;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "OrderRequest{" +
                "product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
