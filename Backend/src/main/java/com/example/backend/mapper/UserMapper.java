package com.example.backend.mapper;

import com.example.backend.model.User;
import com.example.backend.dto.UserDTO;
import com.example.backend.dto.UserRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "email", target = "email")
    @Mapping(source = "role", target = "role")
    UserDTO toUserDTO(User user);

    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    User toUser(UserRequestDTO user);

}
