package com.asmitha.bookstore.controller;

import com.asmitha.bookstore.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;


@Controller
public class HomeController {

    private final ProductService productService;
    private final PathMatchingResourcePatternResolver resourceResolver = new PathMatchingResourcePatternResolver();

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

    /** Scans static/images/reviews/images at runtime — works both locally and inside a deployed JAR. */
    private List<String> getReviewImages() {
        List<String> paths = new ArrayList<>();
        try {
            Resource[] resources = resourceResolver.getResources("classpath:/static/images/reviews/images/*.{jpg,jpeg,png,webp,gif}");
            Arrays.sort(resources, Comparator.comparing(r -> r.getFilename()));
            for (Resource r : resources) {
                if (r.getFilename() != null) {
                    paths.add("/images/reviews/images/" + r.getFilename());
                }
            }
        } catch (Exception e) {
            // fallback: return empty list, section simply won't render
        }
        return paths;
    }
}

