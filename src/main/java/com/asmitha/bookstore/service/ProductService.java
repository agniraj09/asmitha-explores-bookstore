package com.asmitha.bookstore.service;

import com.asmitha.bookstore.model.Product;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

import jakarta.annotation.PostConstruct;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductService {
    
    private List<Product> products = new ArrayList<>();
    
    @PostConstruct
    public void init() {
        loadProductsFromYaml();
    }
    
    private void loadProductsFromYaml() {
        try {
            ClassPathResource resource = new ClassPathResource("products.yaml");
            InputStream inputStream = resource.getInputStream();
            
            Yaml yaml = new Yaml();
            Map<String, Object> data = yaml.load(inputStream);
            
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> productList = (List<Map<String, Object>>) data.get("products");
            
            if (productList != null) {
                for (Map<String, Object> productData : productList) {
                    Product product = mapToProduct(productData);
                    products.add(product);
                }
            }
            
            System.out.println("Successfully loaded " + products.size() + " products from YAML");
            
        } catch (Exception e) {
            System.err.println("Error loading products from YAML: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    @SuppressWarnings("unchecked")
    private Product mapToProduct(Map<String, Object> data) {
        Product product = new Product();
        
        if (data.get("id") != null) {
            product.setId(((Number) data.get("id")).longValue());
        }
        product.setName((String) data.get("name"));
        product.setDescription((String) data.get("description"));
        if (data.get("price") != null) {
            product.setPrice(((Number) data.get("price")).doubleValue());
        }
        product.setCurrency((String) data.get("currency"));
        
        if (data.get("images") != null) {
            product.setImages((List<String>) data.get("images"));
        }
        
        if (data.get("tags") != null) {
            product.setTags((List<String>) data.get("tags"));
        }
        
        product.setCategory((String) data.get("category"));
        product.setAgeGroup((String) data.get("ageGroup"));
        
        // Map stock info
        if (data.get("stock") != null) {
            Map<String, Object> stockData = (Map<String, Object>) data.get("stock");
            Product.StockInfo stock = new Product.StockInfo();
            stock.setStatus((String) stockData.get("status"));
            if (stockData.get("quantity") != null) {
                stock.setQuantity(((Number) stockData.get("quantity")).intValue());
            }
            stock.setExpectedRestock((String) stockData.get("expectedRestock"));
            product.setStock(stock);
        }
        
        // Map shipping info
        if (data.get("shipping") != null) {
            Map<String, Object> shippingData = (Map<String, Object>) data.get("shipping");
            Product.ShippingInfo shipping = new Product.ShippingInfo();
            shipping.setApplicable((Boolean) shippingData.get("applicable"));
            if (shippingData.get("charges") != null) {
                shipping.setCharges(((Number) shippingData.get("charges")).doubleValue());
            }
            shipping.setNotes((String) shippingData.get("notes"));
            product.setShipping(shipping);
        }
        
        // Map customization info
        if (data.get("customization") != null) {
            Map<String, Object> customData = (Map<String, Object>) data.get("customization");
            Product.CustomizationInfo customization = new Product.CustomizationInfo();
            customization.setAvailable((Boolean) customData.get("available"));
            customization.setNotes((String) customData.get("notes"));
            product.setCustomization(customization);
        }
        
        return product;
    }

    public List<Product> getAllProducts() {
        return new ArrayList<>(products);
    }
    
    public Optional<Product> getProductById(Long id) {
        return products.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();
    }
    
    public List<Product> getProductsByCategory(String category) {
        return products.stream()
                .filter(p -> p.getCategory().equalsIgnoreCase(category))
                .toList();
    }
    
    public void addProduct(Product product) {
        product.setId(getNextId());
        products.add(product);
    }
    
    private Long getNextId() {
        return products.stream()
                .mapToLong(Product::getId)
                .max()
                .orElse(0L) + 1;
    }
}

