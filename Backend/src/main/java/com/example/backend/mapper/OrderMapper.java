package com.example.backend.mapper;

import com.example.backend.dto.OrderDTO;
import com.example.backend.dto.OrderRequestDTO;
import com.example.backend.model.Order;
import com.example.backend.model.User;
import org.mapstruct.AfterMapping;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.InjectionStrategy;

import java.util.List;

@Mapper(componentModel = "spring", uses = {UserMapper.class}, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface OrderMapper {

    @Mapping(source = "productId", target = "productId")
    @Mapping(source = "quantity", target = "quantity")
    @Mapping(source = "order.user", target = "user")
    OrderDTO toOrderDTO(Order order);

    List<OrderDTO> toOrderDTO(List<Order> order);

    // source from OrderRequestDTO to my target Order
    @Mapping(source = "productId", target = "productId")
    @Mapping(source = "quantity", target = "quantity")
    Order toOrder(OrderRequestDTO orderRequestDTO, @Context User user);

    @AfterMapping
    default void mapUser(@MappingTarget Order order, @Context User user) {
        order.setUser(user);
    }

}
