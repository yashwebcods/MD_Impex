const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
const db = require('./Config/mongoose');

const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'https://mdimpex.in',
        'https://www.mdimpex.in',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))

// Explicit preflight handling (prevents non-2xx OPTIONS responses blocking browsers)
app.options(/.*/, cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/demo', require('./Routes/demo.route'));
app.use('/api/contact', require('./Routes/contact.route'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// Serve Frontend (Vite build) from the same server (single Render URL)
const frontendDistPath = path.join(__dirname, '..', 'Frontend', 'my-app', 'dist');
const frontendIndexHtml = path.join(frontendDistPath, 'index.html');

if (fs.existsSync(frontendDistPath)) {
    app.use(express.static(frontendDistPath));

    // SPA fallback: any non-API route should return index.html
    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(frontendIndexHtml);
    });
}

app.listen(port, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is running on port ${port}`);
})

module.exports = app;