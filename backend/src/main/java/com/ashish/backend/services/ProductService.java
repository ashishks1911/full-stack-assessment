package com.ashish.backend.services;

import com.ashish.backend.entities.Product;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService {
    List<Product> findAllProducts();
}
