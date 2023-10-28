package com.codecool.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "vat", nullable = false)
    @JdbcTypeCode(SqlTypes.NUMERIC)
    private Double vat;

    @Column(name = "net_price", nullable = false, precision = 19, scale = 2)
    @JdbcTypeCode(SqlTypes.NUMERIC)
    private BigDecimal netPrice;

    @Column(name = "article_number", nullable = false, unique = true)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String articleNumber;

    @Column(name = "name", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String name;

}