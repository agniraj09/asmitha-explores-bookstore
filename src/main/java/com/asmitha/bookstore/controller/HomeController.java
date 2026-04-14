package com.asmitha.bookstore.controller;

import com.asmitha.bookstore.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class HomeController {
    
    private final ProductService productService;
    
    public HomeController(ProductService productService) {
        this.productService = productService;
    }
    
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("products", productService.getAllProducts());
        return "index";
    }
    
    @GetMapping("/product/{id}")
    public String productDetail(@PathVariable Long id, Model model) {
        productService.getProductById(id).ifPresent(product -> 
            model.addAttribute("product", product)
        );
        return "product-detail";
    }
    
    @GetMapping("/about")
    public String about() {
        return "about";
    }
}

