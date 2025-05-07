package com.ashish.backend.services;

import com.ashish.backend.entities.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductService {
    List<Product> findAllProducts();

    List<Product> searchProducts(String search);

    Optional<Product> findById(UUID id);
}
