package com.asmitha.bookstore.model;

import java.util.ArrayList;
import java.util.List;

public class Product {
    private Long id;
    private String name;
    private String description;
    private double price;
    private String currency;
    private List<String> images = new ArrayList<>();
    private List<String> tags = new ArrayList<>();
    private StockInfo stock;
    private ShippingInfo shipping;
    private CustomizationInfo customization;
    private String category;
    private String ageGroup;
    
    // Nested classes for structured data
    public static class StockInfo {
        private String status;
        private int quantity;
        private String expectedRestock;
        
        public StockInfo() {}
        
        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
        public String getExpectedRestock() { return expectedRestock; }
        public void setExpectedRestock(String expectedRestock) { this.expectedRestock = expectedRestock; }
    }
    
    public static class ShippingInfo {
        private boolean applicable;
        private double charges;
        private String notes;
        
        public ShippingInfo() {}
        
        public boolean isApplicable() { return applicable; }
        public void setApplicable(boolean applicable) { this.applicable = applicable; }
        public double getCharges() { return charges; }
        public void setCharges(double charges) { this.charges = charges; }
        public String getNotes() { return notes; }
        public void setNotes(String notes) { this.notes = notes; }
    }
    
    public static class CustomizationInfo {
        private boolean available;
        private String notes;
        
        public CustomizationInfo() {}
        
        public boolean isAvailable() { return available; }
        public void setAvailable(boolean available) { this.available = available; }
        public String getNotes() { return notes; }
        public void setNotes(String notes) { this.notes = notes; }
    }
    
    public Product() {
        this.stock = new StockInfo();
        this.shipping = new ShippingInfo();
        this.customization = new CustomizationInfo();
    }
    
    public Product(Long id, String name, String description, double price, 
                   String imageUrl, String category, int ageRange, boolean inStock) {
        this();
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        if (imageUrl != null) {
            this.images.add(imageUrl);
        }
        this.category = category;
        this.ageGroup = ageRange + " years";
        this.stock.setStatus(inStock ? "IN_STOCK" : "OUT_OF_STOCK");
        this.stock.setQuantity(inStock ? 10 : 0);
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    // Get short description for listing pages (strips HTML)
    public String getShortDescription() {
        if (description == null) return "";
        
        // For Phonics Flash Cards, show a custom short description
        if (name != null && name.equals("Phonics Flash Cards")) {
            return "Learn alphabets and phonics with our comprehensive flash card set!";
        }
        
        // For other products, strip HTML and truncate
        String plainText = description.replaceAll("<[^>]*>", "").trim();
        if (plainText.length() > 150) {
            return plainText.substring(0, 147) + "...";
        }
        return plainText;
    }
    
    public double getPrice() {
        return price;
    }

    // Returns price without trailing .0 for whole numbers (e.g. 250 instead of 250.0)
    public String getFormattedPrice() {
        if (price == Math.floor(price) && !Double.isInfinite(price)) {
            return String.valueOf((long) price);
        }
        return String.valueOf(price);
    }
    
    public void setPrice(double price) {
        this.price = price;
    }
    
    public String getCurrency() {
        return currency;
    }
    
    public void setCurrency(String currency) {
        this.currency = currency;
    }
    
    public List<String> getImages() {
        return images;
    }
    
    public void setImages(List<String> images) {
        this.images = images;
    }
    
    public String getImageUrl() {
        return (images != null && !images.isEmpty()) ? images.get(0) : "/images/placeholder.jpg";
    }
    
    public void setImageUrl(String imageUrl) {
        if (this.images == null) {
            this.images = new ArrayList<>();
        }
        if (!this.images.contains(imageUrl)) {
            this.images.add(0, imageUrl);
        }
    }
    
    public List<String> getTags() {
        return tags;
    }
    
    public void setTags(List<String> tags) {
        this.tags = tags;
    }
    
    public StockInfo getStock() {
        return stock;
    }
    
    public void setStock(StockInfo stock) {
        this.stock = stock;
    }
    
    public ShippingInfo getShipping() {
        return shipping;
    }
    
    public void setShipping(ShippingInfo shipping) {
        this.shipping = shipping;
    }
    
    public CustomizationInfo getCustomization() {
        return customization;
    }
    
    public void setCustomization(CustomizationInfo customization) {
        this.customization = customization;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }
    
    public String getAgeGroup() {
        return ageGroup;
    }
    
    public void setAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
    }
    
    public int getAgeRange() {
        try {
            if (ageGroup == null) return 1;
            
            // Handle "1+ years" format
            if (ageGroup.contains("+")) {
                String numPart = ageGroup.split("\\+")[0].trim();
                return Integer.parseInt(numPart);
            }
            
            // Handle "3-6 years" format (legacy)
            if (ageGroup.contains("-")) {
                return Integer.parseInt(ageGroup.split("-")[0].trim());
            }
            
            // Try to parse just the number
            String numOnly = ageGroup.replaceAll("[^0-9]", "");
            return numOnly.isEmpty() ? 1 : Integer.parseInt(numOnly);
        } catch (Exception e) {
            return 1; // Default to 1+
        }
    }
    
    public void setAgeRange(int ageRange) {
        this.ageGroup = ageRange + "+ years";
    }
    
    public boolean isInStock() {
        return stock != null && "IN_STOCK".equals(stock.getStatus());
    }
    
    public void setInStock(boolean inStock) {
        if (stock == null) {
            stock = new StockInfo();
        }
        stock.setStatus(inStock ? "IN_STOCK" : "OUT_OF_STOCK");
    }
}

