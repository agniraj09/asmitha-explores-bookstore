# Deployment Guide 🚀

This guide will help you deploy your Asmitha Explores Bookstore to the internet for FREE or at minimal cost!

## Quick Comparison

| Platform | Cost | Custom Domain | Setup Difficulty |
|----------|------|---------------|------------------|
| Railway.app | FREE | Yes (paid) | ⭐ Easy |
| Render.com | FREE | Yes (paid) | ⭐ Easy |
| Fly.io | FREE | Yes | ⭐⭐ Medium |
| Heroku | $5/month | Yes | ⭐ Easy |

## Option 1: Railway.app (Recommended) 🚂

**Why Railway?**
- ✅ Completely FREE for hobby projects
- ✅ Super easy setup (3 steps)
- ✅ Auto-deploys from GitHub
- ✅ Free SSL certificate
- ✅ Great performance

### Step-by-Step Instructions:

1. **Sign up for Railway**
   - Go to [railway.app](https://railway.app)
   - Click "Login with GitHub"
   - Authorize Railway

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `asmitha-explores-bookstore`

3. **Configure**
   - Railway auto-detects Spring Boot
   - Wait for build to complete (2-3 minutes)
   - Click "Generate Domain" for your free URL

4. **Access Your Site**
   - Your site will be at: `https://your-app.railway.app`
   - Done! 🎉

### Custom Domain (Optional):
```
Settings → Domains → Add Custom Domain
```

---

## Option 2: Render.com 🎨

**Why Render?**
- ✅ FREE tier available
- ✅ Simple interface
- ✅ Good documentation
- ✅ Automatic HTTPS

### Step-by-Step Instructions:

1. **Sign up**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - Dashboard → "New +" → "Web Service"
   - Connect your GitHub repository
   - Choose `asmitha-explores-bookstore`

3. **Configure Build Settings**
   ```
   Name: asmitha-bookstore
   Environment: Java
   Build Command: mvn clean install
   Start Command: java -jar target/bookstore-1.0.0.jar
   Instance Type: Free
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-7 minutes)
   - Your site: `https://asmitha-bookstore.onrender.com`

**Note**: Free tier sleeps after 15 min of inactivity. First load may be slow.

---

## Option 3: Fly.io ✈️

**Why Fly.io?**
- ✅ Generous free tier
- ✅ Fast global deployment
- ✅ Great for production

### Step-by-Step Instructions:

1. **Install Fly CLI**
   ```bash
   # macOS
   brew install flyctl
   
   # Or via curl
   curl -L https://fly.io/install.sh | sh
   ```

2. **Sign up and Login**
   ```bash
   fly auth signup
   # or
   fly auth login
   ```

3. **Create fly.toml** in project root:
   ```toml
   app = "asmitha-bookstore"

   [build]
     builder = "heroku/buildpacks:20"

   [[services]]
     internal_port = 8080
     protocol = "tcp"

     [[services.ports]]
       handlers = ["http"]
       port = 80

     [[services.ports]]
       handlers = ["tls", "http"]
       port = 443

   [env]
     PORT = "8080"
   ```

4. **Deploy**
   ```bash
   fly launch
   fly deploy
   ```

5. **Access**
   ```bash
   fly open
   ```

---

## Option 4: Heroku (Paid) 💰

**Cost**: ~$5/month for Eco dynos

### Step-by-Step Instructions:

1. **Install Heroku CLI**
   ```bash
   brew tap heroku/brew && brew install heroku
   ```

2. **Login**
   ```bash
   heroku login
   ```

3. **Create Procfile** in project root:
   ```
   web: java -Dserver.port=$PORT -jar target/bookstore-1.0.0.jar
   ```

4. **Create system.properties**:
   ```
   java.runtime.version=17
   ```

5. **Deploy**
   ```bash
   heroku create asmitha-bookstore
   git push heroku main
   heroku open
   ```

---

## Getting a Custom Domain 🌐

### Free Options:

#### 1. Freenom (100% FREE)
- Go to [freenom.com](https://www.freenom.com)
- Search for your desired name
- Get FREE domains: `.tk`, `.ml`, `.ga`, `.cf`, `.gq`
- Free for 12 months, renewable

**Example**: `asmithaexplores.tk`

#### 2. Use Platform Subdomains (FREE)
- Railway: `asmitha-bookstore.railway.app`
- Render: `asmitha-bookstore.onrender.com`
- Fly.io: `asmitha-bookstore.fly.dev`

### Low-Cost Options:

#### 1. Namecheap (~$1-2/year)
- [namecheap.com](https://www.namecheap.com)
- Extensions: `.xyz`, `.online`, `.site`, `.fun`
- Often have $0.88 first-year deals

#### 2. Cloudflare Registrar (~$9/year)
- [cloudflare.com](https://www.cloudflare.com)
- `.com` domains at cost (no markup)
- Free SSL and CDN included

#### 3. Porkbun (~$3-10/year)
- [porkbun.com](https://porkbun.com)
- Affordable pricing
- Free WHOIS privacy

### Connecting Custom Domain:

**For Railway:**
1. Settings → Domains → Custom Domain
2. Add your domain
3. Update DNS records at your registrar:
   ```
   CNAME @ your-app.railway.app
   ```

**For Render:**
1. Settings → Custom Domains
2. Add domain
3. Update DNS:
   ```
   CNAME @ your-app.onrender.com
   ```

**For Fly.io:**
```bash
fly certs add asmithaexplores.com
```
Then add DNS record:
```
A @ <IP from fly certs show>
```

---

## Recommended Setup for Beginners 🎯

1. **Start with Railway** (100% free, easiest)
2. **Use Railway's free subdomain** (`your-app.railway.app`)
3. **Later, get a Freenom domain** if you want custom name (still free!)
4. **Upgrade** to paid domain (.com) when ready

---

## Environment Variables (Optional)

If you need to configure environment-specific settings:

**Railway/Render/Fly.io:**
Add in dashboard:
```
SPRING_PROFILES_ACTIVE=prod
SERVER_PORT=8080
```

**application-prod.properties** (create this file):
```properties
# Production configuration
server.port=${PORT:8080}
spring.thymeleaf.cache=true
```

---

## Testing Your Deployed Site ✅

After deployment, verify:

- [ ] Home page loads correctly
- [ ] All 12 products display
- [ ] Category filters work
- [ ] Product detail pages open
- [ ] About page loads
- [ ] Mobile responsive works (test on phone)
- [ ] Images display (or show gradient backgrounds)
- [ ] No console errors

---

## Monitoring & Analytics (Optional)

### Free Monitoring:

1. **UptimeRobot** (free)
   - [uptimerobot.com](https://uptimerobot.com)
   - Monitors if site is down
   - Email alerts

2. **Google Analytics** (free)
   - Add to `<head>` in templates:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
   ```

3. **Platform Built-in**
   - Railway/Render/Fly all have metrics dashboards

---

## Troubleshooting 🔧

### Build Fails
```bash
# Ensure Java 17 is specified
# Check pom.xml has correct Spring Boot version
mvn clean install -U
```

### Site Not Loading
- Check platform logs
- Verify port is 8080
- Check application.properties

### Images Not Showing
- Normal for demo (we're using CSS gradients as placeholder)
- Add real images to `/static/images/` to fix

### Slow First Load (Render)
- Free tier sleeps after inactivity
- Consider Railway or Fly.io instead

---

## Next Steps 🎓

Once deployed:

1. ✅ Share your link with friends/family
2. ✅ Add real book images
3. ✅ Customize colors and content
4. ✅ Add more products
5. ✅ Consider adding shopping cart
6. ✅ Integrate payment processing

---

## Need Help? 💬

- Check platform documentation
- Open an issue on GitHub
- Most platforms have community Discord/Slack

**Good luck with your deployment! 🚀**

Made with ❤️ for Asmitha Explores

