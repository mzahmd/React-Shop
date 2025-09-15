package com.example.backend.dto;

public class OrderRequest {
    public int productId;
    public int quantity;

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
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
                "productID=" + productId +
                ", quantity=" + quantity +
                '}';
    }
}
