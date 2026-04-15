package com.asmitha.bookstore.controller;

import com.asmitha.bookstore.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@Controller
public class HomeController {

    private final ProductService productService;

    public HomeController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("products", productService.getAllProducts());
        model.addAttribute("reviewImages", getReviewImages());
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

    /** Scans static/images/reviews/images at runtime — new images added there appear automatically. */
    private List<String> getReviewImages() {
        List<String> paths = new ArrayList<>();
        try {
            var resource = getClass().getResource("/static/images/reviews/images");
            if (resource != null) {
                File dir = new File(resource.toURI());
                File[] files = dir.listFiles(f ->
                    f.isFile() && f.getName().matches(".*\\.(jpg|jpeg|png|webp|gif)$")
                );
                if (files != null) {
                    Arrays.sort(files, Comparator.comparing(File::getName));
                    for (File f : files) {
                        paths.add("/images/reviews/images/" + f.getName());
                    }
                }
            }
        } catch (Exception e) {
            // fallback: return empty list, section simply won't render
        }
        return paths;
    }
}

