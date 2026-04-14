# Quick Product Template

Use this template when adding a new product to `products.yaml`:

```yaml
  - id: [NEXT_ID]  # Use next available ID number
    name: "[Product Name]"
    description: |
      [Main description line 1]
      [Main description line 2]
      [Additional details]
    price: [PRICE]
    currency: "INR"
    images:
      - "[image1.jpg]"
      - "[image2.jpg]"
      - "[image3.jpg]"
    tags:
      - "[Tag1]"
      - "[Tag2]"
      - "[Tag3]"
    stock:
      status: "IN_STOCK"  # or "OUT_OF_STOCK"
      quantity: [NUMBER]
      expectedRestock: "[YYYY-MM-DD]"  # Optional, for out of stock items
    shipping:
      applicable: true  # or false
      charges: 50.00
      notes: "Delivery Charges Applicable for Outside Tamilnadu"
    customization:
      available: false  # or true
      notes: "[Customization details]"  # Optional
    category: "[Category Name]"
    ageGroup: "[X-Y years]"
```

## Example - Adding a New Book:

```yaml
  - id: 12
    name: "Numbers Learning Book"
    description: |
      Fun and interactive way to learn numbers 1-100.
      Includes colorful illustrations and counting exercises.
      Perfect for preschoolers and kindergarteners.
    price: 150.00
    currency: "INR"
    images:
      - "numbers_book_cover.jpg"
      - "numbers_book_inside1.jpg"
      - "numbers_book_inside2.jpg"
    tags:
      - "New Arrival"
      - "Numbers"
      - "Math"
      - "Educational"
    stock:
      status: "IN_STOCK"
      quantity: 60
    shipping:
      applicable: true
      charges: 50.00
      notes: "Delivery Charges Applicable for Outside Tamilnadu"
    customization:
      available: false
    category: "Learning Materials"
    ageGroup: "3-6 years"
```

## Steps:
1. Copy the template above
2. Replace all values in [brackets]
3. Paste it into `products.yaml` under the `products:` section
4. Save the file
5. Run: `mvn clean package`
6. Restart the application

