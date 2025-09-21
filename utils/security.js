const helmet = require('helmet');

// Security middleware configuration
const securityHeaders = (app) => {
    // Basic security headers
    app.use(helmet());

    // Content Security Policy
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "https://unpkg.com", "https://api.mapbox.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://unpkg.com", "https://api.mapbox.com", "https://code.jquery.com", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:", "https:", "https://res.cloudinary.com", "https://images.unsplash.com"],
            connectSrc: ["'self'", "https://api.mapbox.com", "https://events.mapbox.com", "https://cdn.jsdelivr.net"],
            workerSrc: ["'self'", "blob:"],
            frameSrc: ["'self'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
            baseUri: ["'self'"],
            formAction: ["'self'"],
        },
    }));

    // HSTS (HTTP Strict Transport Security)
    app.use(helmet.hsts({
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }));

    // X-Frame-Options
    app.use(helmet.frameguard({ action: 'deny' }));

    // X-Content-Type-Options
    app.use(helmet.noSniff());

    // Referrer Policy
    app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));

    // Remove X-Powered-By header
    app.use(helmet.hidePoweredBy());
};

module.exports = securityHeaders;
