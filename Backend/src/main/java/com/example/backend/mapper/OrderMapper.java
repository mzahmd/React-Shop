package com.example.backend.mapper;

import com.example.backend.dto.OrderRequestDTO;
import com.example.backend.model.Order;
import com.example.backend.model.User;
import org.mapstruct.AfterMapping;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    // source from OrderRequestDTO to my target Order
    @Mapping(source = "productId", target = "productId")
    @Mapping(source = "quantity", target = "quantity")
    Order toOrder(OrderRequestDTO orderRequestDTO, @Context User user);

    @AfterMapping
    default void mapUser(@MappingTarget Order order, @Context User user) {
        order.setUser(user);
    }

}
