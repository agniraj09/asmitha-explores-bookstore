# 📚 Product Catalog Management - Quick Reference

## ✨ What's New?

Your products are now managed in a clean, structured YAML file that's:
- **Easy to read** - Clear, organized format
- **Easy to edit** - Just open and update
- **Easy to scale** - Add unlimited products
- **Rich with data** - Stock, shipping, tags, images, and more!

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| **products.yaml** | Your product catalog (edit this!) |
| **PRODUCT-MANAGEMENT.md** | Complete management guide |
| **PRODUCT-TEMPLATE.md** | Template for new products |
| **CSV-VS-YAML.md** | Why YAML is better than CSV |
| **PRODUCT-ORGANIZATION-SUMMARY.md** | Full project summary |

---

## 🚀 Quick Start

### View Your Products
```bash
# Start the application
./start.sh

# Or manually:
java -jar target/bookstore-1.0.0.jar

# Then visit:
http://localhost:8080
```

### Add a New Product
1. Open `src/main/resources/products.yaml`
2. Copy an existing product entry
3. Update the ID (use next number, e.g., 12)
4. Change name, description, price, etc.
5. Save the file
6. Rebuild: `mvn clean package`
7. Restart the app

---

## 📝 Product Structure

```yaml
- id: 1                          # Unique ID
  name: "Product Name"           # Display name
  description: |                 # Multi-line description
    Line 1
    Line 2
  price: 250.00                  # Price
  currency: "INR"                # Currency
  images:                        # Multiple images
    - "image1.jpg"
    - "image2.jpg"
  tags:                          # Tags for filtering
    - "New Arrival"
    - "Popular"
  stock:                         # Stock management
    status: "IN_STOCK"
    quantity: 50
  shipping:                      # Shipping info
    applicable: true
    charges: 50.00
    notes: "Delivery details"
  customization:                 # Customization options
    available: false
  category: "Books"              # Category
  ageGroup: "3-6 years"          # Age range
```

---

## 🛠️ Common Tasks

### Update Price
Find the product and change:
```yaml
price: 299.00  # Changed from 250.00
```

### Mark Out of Stock
```yaml
stock:
  status: "OUT_OF_STOCK"
  quantity: 0
  expectedRestock: "2026-05-15"
```

### Add Images
```yaml
images:
  - "product_main.jpg"
  - "product_back.jpg"
  - "product_inside.jpg"
```

### Change Shipping
```yaml
shipping:
  applicable: true
  charges: 0.00  # Free shipping!
  notes: "Free shipping for orders above ₹500"
```

---

## 📊 Your Current Catalog

**Total Products:** 11
- 10 In Stock
- 1 Out of Stock

**Categories:**
- Books (1)
- Activity Books (2)
- Story Books (3)
- Learning Materials (3)
- Language Learning (1)
- Educational Toys (1)

**Price Range:** ₹100 - ₹250

---

## 🎯 Benefits

### Before (CSV)
```csv
name,description,productImageUrl,collection,sku,...
"Product","<ul><li>Item</li></ul>","img1.jpg;img2.jpg",...
```
😵 Hard to read and edit!

### After (YAML)
```yaml
- id: 1
  name: "Product"
  description: "Clear description"
  images:
    - "img1.jpg"
    - "img2.jpg"
```
😊 Easy to understand!

---

## 🔄 Workflow

```
1. Edit products.yaml
   ↓
2. Save changes
   ↓
3. mvn clean package
   ↓
4. Restart application
   ↓
5. Changes live! ✅
```

---

## 💡 Pro Tips

1. **Always use unique IDs** - Never reuse deleted product IDs
2. **Test after changes** - Make sure the app restarts without errors
3. **Backup before major changes** - Copy products.yaml before big edits
4. **Use consistent naming** - Follow the same style for similar products
5. **Update metadata** - Change `lastUpdated` date at bottom of YAML

---

## 📞 Help & Documentation

- **Adding products?** → See `PRODUCT-TEMPLATE.md`
- **Managing products?** → See `PRODUCT-MANAGEMENT.md`
- **Why YAML?** → See `CSV-VS-YAML.md`
- **Full details?** → See `PRODUCT-ORGANIZATION-SUMMARY.md`

---

## ✅ Verification

Everything is working! ✨
- ✅ Application compiles successfully
- ✅ All 11 products load from YAML
- ✅ API returns correct data
- ✅ Stock management functional
- ✅ Multiple images supported
- ✅ Tags and categories working

---

## 🎉 You're All Set!

Your bookstore now has a professional, scalable product management system.

**Next time you want to add a product:**
1. Open `products.yaml`
2. Copy a product entry
3. Update the values
4. Save and restart

That's it! 🚀

---

**File Location:** `/Users/amg852/Personal/Repo/asmitha-explores-bookstore/src/main/resources/products.yaml`

