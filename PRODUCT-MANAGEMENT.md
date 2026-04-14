# Product Management Guide

## Overview
Your bookstore products are now managed using a structured YAML file located at:
```
src/main/resources/products.yaml
```

This approach provides several benefits:
- **Easy to read and edit** - YAML is human-friendly
- **Structured data** - All product information is organized consistently
- **Scalable** - Easy to add new products
- **No code changes needed** - Just edit the YAML file and restart the app
- **Version control friendly** - Easy to track changes in Git

## Product Structure

Each product in the YAML file has the following fields:

### Required Fields
- **id**: Unique identifier (number)
- **name**: Product name (string)
- **description**: Detailed product description (can be multi-line)
- **price**: Product price (number, in INR)
- **currency**: Currency code (e.g., "INR")

### Optional Fields
- **images**: List of image filenames
- **tags**: List of tags for categorization and badges (e.g., "New Arrival", "Selling Fast")
- **category**: Product category (e.g., "Books", "Activity Books", "Learning Materials")
- **ageGroup**: Recommended age range (e.g., "3-6 years")

### Stock Information (nested)
- **status**: "IN_STOCK" or "OUT_OF_STOCK"
- **quantity**: Number of items available
- **expectedRestock**: Date when item will be back in stock (for out of stock items)

### Shipping Information (nested)
- **applicable**: true/false
- **charges**: Shipping cost (number)
- **notes**: Shipping information text

### Customization Information (nested)
- **available**: true/false
- **notes**: Customization details

## Example Product Entry

```yaml
  - id: 1
    name: "Phonics Flash Cards"
    description: |
      Available in Hard & Soft Copy.
      Covers all 26 alphabets.
      Includes 2 short teaching reference videos.
    price: 250.00
    currency: "INR"
    images:
      - "image1.png"
      - "image2.png"
    tags:
      - "New Arrival"
      - "Flash Cards"
      - "Phonics"
    stock:
      status: "IN_STOCK"
      quantity: 50
    shipping:
      applicable: true
      charges: 50.00
      notes: "Delivery Charges Applicable for Hard Copy"
    customization:
      available: true
      notes: "Cards can be customized based on your requirements"
    category: "Learning Materials"
    ageGroup: "3-6 years"
```

## How to Add a New Product

1. Open `src/main/resources/products.yaml`
2. Scroll to the products list
3. Copy an existing product entry
4. Update the following fields:
   - Change the `id` to a unique number
   - Update the `name`
   - Modify the `description`
   - Set the `price`
   - Add your `images` (filenames only)
   - Add relevant `tags`
   - Update `stock` information
   - Set `shipping` details
   - Update `category` and `ageGroup`
5. Save the file
6. Restart your application

## How to Update a Product

1. Open `src/main/resources/products.yaml`
2. Find the product by searching for its name or id
3. Update the fields you want to change
4. Save the file
5. Restart your application

## How to Mark a Product as Out of Stock

Find the product and update its stock section:
```yaml
stock:
  status: "OUT_OF_STOCK"
  quantity: 0
  expectedRestock: "2026-05-15"  # Optional
```

## Available Categories

The following categories are currently defined:
- Books
- Activity Books
- Story Books
- Learning Materials
- Language Learning
- Educational Toys

You can add new categories by simply using them in a product entry. Consider updating the metadata section at the bottom of the YAML file to keep track of all categories.

## Available Age Groups

- 2-5 years
- 3-5 years
- 3-6 years
- 3-8 years
- 4-6 years
- 4-7 years
- 4-8 years
- 5-8 years

## Common Tags

- New Arrival
- Selling Fast
- Flash Cards
- Phonics
- Bedtime Stories
- Activity Book
- Learning
- IQ Activities
- Writing Practice

Feel free to create new tags as needed!

## Tips for Managing Products

1. **Keep IDs unique**: Never reuse an ID, even for deleted products
2. **Use consistent naming**: Follow the same pattern for similar products
3. **Image management**: Store images in `src/main/resources/static/images/`
4. **Multi-line descriptions**: Use the `|` character after `description:` for multi-line text
5. **Price format**: Use decimal format (e.g., 250.00, not 250)
6. **Test after changes**: Always test the app after modifying the YAML file

## Metadata Section

At the bottom of the YAML file, there's a metadata section:
```yaml
metadata:
  lastUpdated: "2026-04-14"
  version: "1.0"
  defaultCurrency: "INR"
  defaultShippingCharges:
    withinTamilnadu: 0.00
    outsideTamilnadu: 50.00
  categories: [...]
  ageGroups: [...]
```

Update the `lastUpdated` field whenever you make changes to keep track of modifications.

## Troubleshooting

### Application won't start after YAML changes
- Check for YAML syntax errors (indentation is crucial!)
- Ensure all required fields are present
- Look for missing quotes around strings with special characters
- Check the application logs for specific error messages

### Products not showing up
- Verify the YAML file is in the correct location: `src/main/resources/products.yaml`
- Ensure you rebuilt the application with `mvn clean package`
- Check that the `id` field is unique for each product

### Images not displaying
- Verify image files are in `src/main/resources/static/images/`
- Check that image filenames in YAML match actual files
- Ensure image filenames don't have spaces or special characters

## Scaling to 100+ Products

When your catalog grows large:
1. Consider organizing by category in separate YAML files
2. Use a database (like H2, PostgreSQL) instead of YAML
3. Build an admin interface for product management
4. Implement search and filtering features

For now, the YAML approach works great for up to 50-100 products!

