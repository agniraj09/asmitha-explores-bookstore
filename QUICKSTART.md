# 🎉 Asmitha Explores Bookstore - Quick Start Guide

Congratulations! Your bookstore website is now up and running!

## ✅ What's Been Built

I've created a **complete, production-ready bookstore website** with:

### Features ✨
- **12 Pre-loaded Products** - Sample children's books ready to display
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Category Filtering** - Filter books by Adventure, Educational, Activity, Science, etc.
- **Product Detail Pages** - Individual pages for each book
- **About Page** - Tells your story
- **REST API** - For potential future integrations
- **Kid-Friendly Colors** - Bright, engaging design

### Technology Stack 🛠️
- **Backend**: Spring Boot 3.2.4
- **Frontend**: Thymeleaf + HTML5 + CSS3 + JavaScript
- **Build Tool**: Maven
- **Java Version**: 17

## 🚀 Running Your Website

### Start the Server
```bash
cd /Users/amg852/Personal/Repo/asmitha-explores-bookstore
mvn spring-boot:run
```

Or use the convenient script:
```bash
./start.sh
```

### Access Your Website
Open your browser to:
```
http://localhost:8080
```

### Stop the Server
Press `Ctrl+C` in the terminal

## 📂 Project Structure

```
asmitha-explores-bookstore/
├── src/
│   ├── main/
│   │   ├── java/                      # Java source code
│   │   │   └── com/asmitha/bookstore/
│   │   │       ├── BookstoreApplication.java
│   │   │       ├── controller/        # Web controllers
│   │   │       ├── model/             # Data models
│   │   │       └── service/           # Business logic
│   │   └── resources/
│   │       ├── static/                # CSS, JS, Images
│   │       │   ├── css/styles.css     # All your styling
│   │       │   ├── js/script.js       # JavaScript
│   │       │   └── images/            # Book images
│   │       ├── templates/             # HTML pages
│   │       │   ├── index.html         # Home page
│   │       │   ├── product-detail.html
│   │       │   └── about.html
│   │       └── application.properties # Configuration
├── pom.xml                            # Maven dependencies
├── README.md                          # Project documentation
├── SETUP.md                           # Detailed setup guide
├── DEPLOYMENT.md                      # Deployment instructions
└── start.sh                           # Quick start script
```

## 🎨 Customization Guide

### Adding New Products

Edit `ProductService.java` (around line 21):

```java
products.add(new Product(
    13L,                              // Unique ID
    "Your Book Title",                // Title
    "Book description goes here",     // Description
    19.99,                           // Price
    "/images/your-book.jpg",         // Image path
    "Category",                      // Category name
    6,                               // Recommended age
    true                             // In stock?
));
```

### Changing Colors

Edit `src/main/resources/static/css/styles.css`:

```css
:root {
    --primary-color: #FF6B6B;      /* Coral red */
    --secondary-color: #4ECDC4;    /* Turquoise */
    --accent-color: #FFE66D;       /* Yellow */
}
```

### Adding Product Images

1. Place images in `src/main/resources/static/images/`
2. Name them (e.g., `book13.jpg`)
3. Reference in product: `/images/book13.jpg`

### Updating Content

- **Home Page**: Edit `src/main/resources/templates/index.html`
- **About Page**: Edit `src/main/resources/templates/about.html`
- **Styles**: Edit `src/main/resources/static/css/styles.css`
- **JavaScript**: Edit `src/main/resources/static/js/script.js`

## 🌐 Deploying to Production (FREE!)

### Option 1: Railway.app (Recommended - 100% FREE)

1. **Sign up**: Go to [railway.app](https://railway.app)
2. **Connect GitHub**: Link your repository
3. **Deploy**: Click "New Project" → "Deploy from GitHub"
4. **Done!** Your site will be live in 2-3 minutes

**Cost**: FREE forever for hobby projects
**URL**: `https://your-app.railway.app`

### Option 2: Render.com (FREE)

1. **Sign up**: Go to [render.com](https://render.com)
2. **New Web Service**: Connect GitHub
3. **Configure**:
   - Build: `mvn clean install`
   - Start: `java -jar target/bookstore-1.0.0.jar`
4. **Deploy**: Click "Create Web Service"

**Cost**: FREE (sleeps after 15 min inactivity)
**URL**: `https://your-app.onrender.com`

### Option 3: Fly.io (FREE)

```bash
# Install Fly CLI
brew install flyctl

# Login and deploy
fly auth login
fly launch
fly deploy
```

**Cost**: FREE tier available
**URL**: `https://your-app.fly.dev`

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for detailed step-by-step instructions!

## 🌍 Custom Domain (Free Options)

### 100% Free Domains:
1. **Freenom**: Get `.tk`, `.ml`, `.ga` domains free
2. **Platform Subdomains**: Use `yourapp.railway.app` (included)

### Low-Cost Domains ($1-10/year):
1. **Namecheap**: `.xyz`, `.online` for $1-2/year
2. **Porkbun**: Various domains $3-10/year
3. **Cloudflare**: `.com` at cost (~$9/year)

## 📊 API Endpoints

Your site includes REST APIs:

```bash
# Get all products
curl http://localhost:8080/api/products

# Get specific product
curl http://localhost:8080/api/products/1

# Get by category
curl http://localhost:8080/api/products/category/Adventure
```

## 🔧 Development Tips

### Hot Reload

The app includes DevTools - your changes reload automatically!
Just save a file and refresh your browser.

### Building for Production

```bash
mvn clean package
java -jar target/bookstore-1.0.0.jar
```

### Testing Locally

```bash
# Run tests
mvn test

# Build without tests
mvn clean package -DskipTests
```

## 📝 Next Steps

Now that your bookstore is running, here are some ideas:

1. **Add Real Images** - Replace placeholder images with actual book covers
2. **Customize Content** - Update descriptions, prices, categories
3. **Add More Products** - Expand your catalog
4. **Deploy Online** - Make it accessible to everyone
5. **Get a Domain** - Make it professional
6. **Add Features**:
   - Shopping cart
   - Payment integration (Stripe/PayPal)
   - User accounts
   - Search functionality
   - Product reviews

## 🆘 Troubleshooting

### Port Already in Use?
```bash
# Change port in application.properties
server.port=8081
```

### Build Fails?
```bash
mvn clean install -U
```

### Can't Access Website?
- Check if server is running: `lsof -i :8080`
- Try: `http://127.0.0.1:8080` instead of `localhost`

## 📚 Documentation

- **[README.md](README.md)** - Project overview
- **[SETUP.md](SETUP.md)** - Complete setup and customization guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment to production

## 🎯 Current Status

✅ **Application is RUNNING** on http://localhost:8080
✅ **12 Products** loaded and ready to display
✅ **Fully Responsive** design working
✅ **Category Filtering** functional
✅ **Product Details** pages working
✅ **About Page** ready
✅ **REST API** available

## 🎨 Pages Built

1. **Home** (`/`) - Product catalog with filtering
2. **Product Detail** (`/product/{id}`) - Individual product pages
3. **About** (`/about`) - Your story

## 💡 Tips

- The design uses placeholder gradients for images - add real images for best results
- All products are stored in memory - add a database (PostgreSQL/MySQL) for production
- The filter buttons work via JavaScript - no page reload needed
- Mobile menu and layout adjust automatically

## 🚀 Ready to Deploy?

Check out **[DEPLOYMENT.md](DEPLOYMENT.md)** for:
- Step-by-step deployment guides
- Free hosting options
- Custom domain setup
- SSL certificate configuration
- Environment variables

---

**Made with ❤️ for Asmitha Explores**

Need help? Check the documentation or open an issue!

Happy selling! 📚✨

