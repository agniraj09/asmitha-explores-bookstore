# Asmitha Explores Bookstore 📚

A beautiful, kid-friendly and parent-friendly bookstore website built with Spring Boot!

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.4-brightgreen)

## 🌟 Live Demo

Coming soon! Follow the deployment guide to launch your own.

## ✨ Features

- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Kid-Friendly Design** - Colorful, engaging interface with fun emojis
- 👨‍👩‍👧‍👦 **Parent-Approved** - Clean, safe browsing experience
- 🔍 **Smart Filtering** - Filter books by category
- 📖 **Product Details** - Detailed pages with age recommendations
- ⚡ **Fast & Lightweight** - Optimized performance

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Maven 3.6+

### Run Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd asmitha-explores-bookstore

# Run the application
mvn spring-boot:run

# Open browser to http://localhost:8080
```

That's it! 🎉

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - Complete setup guide and customization
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to production (FREE options!)

## 🌐 Free Deployment Options

Deploy your bookstore for **FREE** using:

- **Railway.app** (Recommended) - 100% free for hobby projects
- **Render.com** - Free tier with auto-deploy
- **Fly.io** - Generous free tier

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🎨 Screenshots

### Home Page
Colorful, engaging layout with all 12 products displayed in a responsive grid.

### Product Details
Individual pages for each book with age recommendations and descriptions.

### Mobile Responsive
Beautiful design that adapts perfectly to any screen size.

## 🛠️ Technology Stack

- **Backend**: Spring Boot 3.2.4
- **Template Engine**: Thymeleaf
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Maven
- **Java Version**: 17

## 📦 Project Structure

```
asmitha-explores-bookstore/
├── src/main/
│   ├── java/com/asmitha/bookstore/
│   │   ├── controller/    # Web & REST controllers
│   │   ├── model/         # Data models
│   │   └── service/       # Business logic
│   └── resources/
│       ├── static/        # CSS, JS, images
│       └── templates/     # HTML templates
└── pom.xml                # Dependencies
```

## 🎯 Adding Products

Simply edit `ProductService.java`:

```java
products.add(new Product(
    13L, 
    "Your Book Title",
    "Description", 
    19.99,
    "/images/book.jpg", 
    "Category",
    5,  // Age
    true
));
```

## 🌈 Customizing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
}
```

## 🆓 Custom Domain (Free/Cheap)

- **FREE**: Freenom (.tk, .ml, .ga)
- **$1-2/year**: Namecheap (.xyz, .online)
- **~$9/year**: Cloudflare (.com)

## 🔜 Future Enhancements

- [ ] Shopping cart
- [ ] Payment integration (Stripe/PayPal)
- [ ] User authentication
- [ ] Product search
- [ ] Reviews & ratings
- [ ] Admin panel
- [ ] Database integration

## 📄 License

MIT License - Use this freely for your bookstore!

## 🤝 Contributing

Contributions welcome! Open an issue or submit a PR.

---

**Made with ❤️ for young readers**

Happy Reading! 📚✨
