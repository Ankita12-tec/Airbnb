# Wanderlust - Travel Listings Platform

A modern, secure Node.js/Express application for travel listings with integrated security features.

## 🚀 Deployment to Render

### Prerequisites
- Node.js 22.17.0
- MongoDB Atlas account
- Cloudinary account (for image uploads)
- Mapbox account (for maps)

### Environment Variables
Create a `.env` file with the following variables:

```env
NODE_ENV=production
PORT=8080
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_secret_key_for_sessions
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_token
```

### Security Features Implemented
✅ **HTTPS Redirect** - Forces all traffic to HTTPS in production
✅ **Security Headers** - Helmet.js with comprehensive CSP
✅ **Secure Cookies** - HTTPOnly, Secure, SameSite flags
✅ **HSTS** - HTTP Strict Transport Security
✅ **XSS Protection** - Content Security Policy
✅ **Clickjacking Protection** - X-Frame-Options
✅ **MIME Sniffing Protection** - X-Content-Type-Options

### Render Deployment Steps

1. **Create a new Web Service** on Render
2. **Connect your GitHub repository**
3. **Configure Build Settings:**
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Add Environment Variables** in Render Dashboard
5. **Deploy**

### Troubleshooting "Dangerous Site" Error

If you encounter the "Dangerous site" warning:

1. **Check HTTPS Configuration** - Ensure your app redirects HTTP to HTTPS
2. **Verify Security Headers** - The app includes comprehensive security headers
3. **Check Dependencies** - Run `npm audit` to ensure no vulnerabilities
4. **Review CSP** - Content Security Policy allows necessary external resources

### Features
- 🏠 Travel listings with image uploads
- 🗺️ Interactive maps with Mapbox
- 🔐 User authentication with Passport.js
- 📱 Responsive design
- ☁️ Cloud image storage with Cloudinary
- 🔒 Production-ready security

### Local Development
```bash
npm install
npm run dev
```

### Production Deployment
```bash
npm start
```

## 📝 License
ISC
