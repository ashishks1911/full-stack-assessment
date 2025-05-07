package com.ashish.backend.controllers;

import com.ashish.backend.entities.Product;
import com.ashish.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) String search) {
        if (search != null) {
            List<Product> list = productService.searchProducts(search);
            return ResponseEntity.status(HttpStatus.OK).body(list);
        }
        List<Product> productList = productService.findAllProducts();
        return ResponseEntity.status(HttpStatus.OK).body(productList);
    }


}
