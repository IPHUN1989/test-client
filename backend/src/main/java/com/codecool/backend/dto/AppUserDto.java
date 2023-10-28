package com.codecool.backend.dto;

import java.io.Serializable;

/**
 * DTO for {@link com.codecool.backend.model.AppUser}
 */
public record AppUserDto(String userName, String password) implements Serializable {
}