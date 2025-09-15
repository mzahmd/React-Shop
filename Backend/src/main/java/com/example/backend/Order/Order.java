package com.example.backend.Order;

import com.example.backend.User.User;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    int id;
    @ManyToOne
    User user;
    int productId;
    int quantity;

    public Order() {

    }

    public Order(User user, int productId, int quantity) {
        this.user = user;
        this.productId = productId;
        this.quantity = quantity;
    }

    public Order(int id, User user, int productId, int quantity) {
        this.id = id;
        this.user = user;
        this.productId = productId;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getProduct() {
        return productId;
    }

    public void setProduct(int product) {
        this.productId = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
