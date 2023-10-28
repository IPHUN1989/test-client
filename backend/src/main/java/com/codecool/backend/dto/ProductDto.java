package com.codecool.backend.dto;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * DTO for {@link com.codecool.backend.model.Product}
 */
public record ProductDto(Double vat, BigDecimal netPrice, String articleNumber, String name) implements Serializable {
}