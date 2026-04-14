# Asmitha Explores Bookstore 📚

A kid-friendly and parent-friendly bookstore website built with Spring Boot, featuring a colorful, responsive design perfect for showcasing children's books.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.4-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **📱 Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **🎨 Kid-Friendly Design**: Colorful, engaging interface with fun emojis and illustrations
- **👨‍👩‍👧‍👦 Parent-Approved**: Clean, safe browsing experience
- **🔍 Smart Filtering**: Filter books by category (Adventure, Educational, Activity, Science, etc.)
- **📖 Product Details**: Detailed pages for each book with age recommendations
- **⚡ Fast & Lightweight**: Optimized for quick loading times
- **🛠️ Easy to Customize**: Simple structure for adding/updating products

## 🚀 Quick Start

### Prerequisites

- Java 17 or higher
- Maven 3.6+

### Running Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd asmitha-explores-bookstore
   ```

2. **Build the project**
   ```bash
   mvn clean install
   ```

3. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

That's it! Your bookstore is now running! 🎉

## 📁 Project Structure

```
asmitha-explores-bookstore/
├── src/
│   ├── main/
│   │   ├── java/com/asmitha/bookstore/
│   │   │   ├── BookstoreApplication.java      # Main application
│   │   │   ├── controller/
│   │   │   │   ├── HomeController.java        # Web pages controller
│   │   │   │   └── ProductRestController.java # REST API controller
│   │   │   ├── model/
│   │   │   │   └── Product.java               # Product data model
│   │   │   └── service/
│   │   │       └── ProductService.java        # Business logic
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/
│   │       │   │   └── styles.css             # All styling
│   │       │   ├── js/
│   │       │   │   └── script.js              # JavaScript functionality
│   │       │   └── images/                     # Product images
│   │       ├── templates/
│   │       │   ├── index.html                  # Home page
│   │       │   ├── product-detail.html         # Product details
│   │       │   └── about.html                  # About page
│   │       └── application.properties          # Configuration
│   └── test/                                   # Test files
└── pom.xml                                     # Maven dependencies
```

## 🎨 Customization

### Adding New Products

Edit `ProductService.java` in the `initializeProducts()` method:

```java
products.add(new Product(
    13L,                                    // ID
    "Your Book Title",                      // Name
    "Book description here",                // Description
    19.99,                                  // Price
    "/images/your-book.jpg",               // Image URL
    "Category",                            // Category
    5,                                     // Age range
    true                                   // In stock
));
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #FF6B6B;      /* Main color */
    --secondary-color: #4ECDC4;    /* Secondary color */
    --accent-color: #FFE66D;       /* Accent color */
}
```

### Adding Product Images

1. Place your images in `src/main/resources/static/images/`
2. Reference them in the product: `/images/your-image.jpg`

## 🌐 Deployment Options (Free or Low Cost)

### Option 1: Railway.app (Recommended - FREE)

Railway offers free hosting for hobby projects:

1. **Sign up** at [railway.app](https://railway.app)
2. **Connect GitHub** repository
3. **Deploy** - Railway auto-detects Spring Boot
4. **Custom domain**: Free `.railway.app` subdomain or connect your own

**Steps:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

### Option 2: Render.com (FREE)

1. Sign up at [render.com](https://render.com)
2. Create new "Web Service"
3. Connect GitHub repository
4. Build command: `mvn clean install`
5. Start command: `java -jar target/bookstore-1.0.0.jar`
6. Free `.onrender.com` domain included

### Option 3: Fly.io (FREE Tier)

1. Sign up at [fly.io](https://fly.io)
2. Install Fly CLI
3. Run:
   ```bash
   fly launch
   fly deploy
   ```
4. Free tier includes 3 shared CPUs

### Option 4: Heroku (LOW COST ~$5/month)

Create a `Procfile`:
```
web: java -jar target/bookstore-1.0.0.jar
```

Deploy:
```bash
heroku create asmitha-bookstore
git push heroku main
```

### Custom Domain (Free or Cheap)

- **Free Subdomains**: Use platform-provided domains (`.railway.app`, `.onrender.com`, etc.)
- **Freenom** (FREE): Get free domains (.tk, .ml, .ga, .cf, .gq)
- **Namecheap** (~$1-2/year): .xyz, .online domains
- **Cloudflare** (~$9/year): .com domains at cost

## 📊 API Endpoints

The application includes REST APIs for external integrations:

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get specific product
- `GET /api/products/category/{category}` - Filter by category

Example:
```bash
curl http://localhost:8080/api/products
```

## 🔧 Configuration

Edit `application.properties` to customize:

```properties
# Change server port
server.port=8080

# Application name
spring.application.name=Asmitha Explores Bookstore
```

## 🧪 Testing

Run tests with:
```bash
mvn test
```

## 📱 Mobile Responsive

The website automatically adapts to:
- 📱 Mobile phones (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Desktops (> 768px)

## 🎯 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Integrate payment gateway (Stripe/PayPal)
- [ ] Add user authentication
- [ ] Implement product search
- [ ] Add product reviews
- [ ] Email notifications
- [ ] Admin panel for product management
- [ ] Database integration (PostgreSQL/MySQL)

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Change port in application.properties
server.port=8081
```

**Maven build fails?**
```bash
# Clean and rebuild
mvn clean install -U
```

**Images not showing?**
- Ensure images are in `src/main/resources/static/images/`
- Check file names match those in ProductService.java

## 📄 License

MIT License - feel free to use this for your own bookstore!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 💬 Support

For questions or issues, please open an issue on GitHub.

---

**Made with ❤️ for young readers by Asmitha Explores**

Happy Reading! 📚✨

