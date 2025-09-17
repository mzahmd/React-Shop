package com.example.backend.dto;

public class OrderDTO {
    private UserDTO user;
    private int productId;
    private int quantity;

    public OrderDTO(UserDTO user, int productId, int quantity) {
        this.user = user;
        this.productId = productId;
        this.quantity = quantity;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUserDTO(UserDTO user) {
        this.user = user;
    }

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
}
