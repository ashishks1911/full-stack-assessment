package com.ashish.backend.entities;

import com.ashish.backend.enums.Category;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;
@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    private Double price;
    private String brand;
    @Enumerated(EnumType.STRING)
    private Category category;
    private String imageUrl;


}
