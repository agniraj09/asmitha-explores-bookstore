# 🚀 Deploy to Render

## Prerequisites
- Your code pushed to a **GitHub** repository
- A free account at [render.com](https://render.com)

---

## Step-by-Step Deployment

### 1. Push your code to GitHub
```bash
git add .
git commit -m "Add Render deployment config"
git push origin main
```

### 2. Create a new Web Service on Render
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account and select this repository

### 3. Configure the service
Fill in these settings:

| Setting | Value |
|---|---|
| **Name** | `asmitha-explores-bookstore` |
| **Runtime** | `Java` |
| **Branch** | `main` |
| **Build Command** | `./mvnw clean package -DskipTests` |
| **Start Command** | `java -jar target/bookstore-1.0.0.jar` |
| **Plan** | `Free` |

### 4. Set Environment Variables
Under **Environment** tab, add:

| Key | Value |
|---|---|
| `JAVA_VERSION` | `17` |

> **Note:** `PORT` is automatically injected by Render — no need to set it manually.

### 5. Click "Create Web Service"
Render will:
- Pull your code from GitHub
- Run `./mvnw clean package -DskipTests` to build the JAR
- Start the app with `java -jar target/bookstore-1.0.0.jar`

Your site will be live at: `https://asmitha-explores-bookstore.onrender.com`

---

## Fixing Missing Images After Deploy

If images show 404 on Render but work locally, the image files are not committed to Git.
Run these commands to force-add all images:

```bash
git add -f src/main/resources/static/images/
git commit -m "Add all product and review images"
git push origin main
```

## Auto-Deploy on Push
Every time you push to the `main` branch, Render will automatically rebuild and redeploy.

---

## Free Tier Notes
- The free tier **spins down after 15 minutes of inactivity** — the first visit after idle may take ~30 seconds to wake up.
- To avoid this, upgrade to the **Starter plan ($7/month)** for always-on hosting.

