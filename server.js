const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// --- Firebase Admin SDK Initialization ---
// The following serviceAccount object has been populated with the data from your JSON file.
const serviceAccount = {
   
  "type": "service_account",
  "project_id": "ecommerce-315ab",
  "private_key_id": "6ecff47a54e06079b0b873caac38f34d495e7be0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHSh2AZI7+hhuH\nxN/6j4P2vmIhrPC5Ob2x4ZqtmMxXjLx5Sqxeg/h2AuhMeDncsm+gdB+oyHfuGM47\nSSKQK9mQntox73+G48ZcrYH++6D+tlxOU18l1pvwqllJYGel2hsAMJmI7/al77Hz\nrSqrkBe6OotvC9Dlk/zr42wbU8CJfQxdOC0VMljbYT1HaP1dag3ADROa45+yX9Ca\nodvJ6kx3HMhsuY7MwV/z6W5q6fg2AgmhJ6SiAJvqnSPVpl8BSdTaM06tIzCxggnG\nAZ4KV+633gfFjhFuUTqaJ93yNXDmZULgMHF7R5FSfJ9IPc/2rIPC0/2hlxwgCkKs\n02d1gAUBAgMBAAECggEAEeaNB9SrKMmQUihTm1n7bH+6qMkJRlnyuWDzrSwluVIh\ni8jdUBANPUG9mUDN/GOQC0WNonIp85pey+HMgk6uAtjXQyz+s3W6LOZDive8hPnf\nCK9hwzBSXtJY+seiB7peOoIjCF3QNc917daxbSpK4ftoPYKTh6DnUvjhOQMo2YXX\n/9ymJ+zt8J7qEJf9Q5QVuq8hL+VEjPmD1CD2LbeNCVt/qOWbGrRkFKHPeak1j7Kc\nwbduhcKOcZuFR06+la9gjp5iqY1pZCO65foC3N3bVeVnAesDdG9EpbOTgbxeIjQU\nPzUnMj0LhTM+aHJZDIFXGcim7C20k/YWioNmgOw7kQKBgQDqOa+pCvQ7UQUJMlnp\nCrCEPAFWj6pJXM15zHhpZSieg67+PGNNH1LSfl2NVM7j2xUIj0mIsO001ZoqD6BE\nBNeOcv0eB/hRgdSvvy7nc+gJBWP4QsyM69DVXkLXIMergnLo3k4ubxsAeuivPwyG\n+vX/rXxJMww90lEWRkypEK3+SwKBgQDZ0P5eJsCsLApx6i1h3eLSr/XiT+Lr5NGQ\nmh2iOt/xhVoH7Lr5lvS5BM0Me0Ii/FiaXZYyyypMK5kWS3HB9jb5xv1PUk4OYDgX\ncdKAthCtsfsYEGGcMPkv9lynQtnqy1onEgAimlc5PxNJsV8kvCyllAx3+ei2ONlc\nnf2f/v9KYwKBgAflE9+tx9er/nB16wPo4VRDtYPWadX5M8/ULYbX6wuUwrQ9EtfJ\no4AG1F5sKmERxF66fa8Gz6gFPyIFztAcHavmglOdzyfoKWQXHJyekoajUOBQWBaz\n6CEZAUXBDBni1r60p4v3IMDeY7Nse56dHOeWUGcjOllnGmaWzgSw1DyLAoGAHOo9\nmkoSsch26oBn3eISxl1NiumH+kC6ATQ0UuD18Z3+QacPeyqq+hTFE68ZLIPLT1K1\nKbEGwG3ZOLhzNYh169qarfkDG61yRMp7Y1LIDAbgimVCT/XAXrmZuyqIuz6bjSw6\nkF1kztisus+tDbddRe3Nae/nEKmjUUQ38xFq2nkCgYEAx17YMlBWhy5RSBiV07EJ\np/79Qo0TjWxgfZoRAm0mjQ0RO/uNXOJb566SgeYa6iJUc7hBpAzDol1/IXjqHeXw\nTr1FukgkeoQlXA+XHgoZAin/I0wH+d5YxMOjAg+u0LbABnGwX1/I+FpUgDyiyLQM\n981Aue5y+2F3fzm6vTx7pCU=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@ecommerce-315ab.iam.gserviceaccount.com",
  "client_id": "109882607582490373000",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40ecommerce-315ab.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"

};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = 3000;

// Enable CORS for all requests from the frontend
app.use(cors());
// Parse incoming JSON payloads
app.use(express.json());
// Serve the HTML file directly from the root
app.use(express.static(__dirname));

// --- In-Memory Data Storage ---
// NOTE: This data is not persistent. It will be reset every time the server restarts.
// For a production application, you would use a database like Firestore, MongoDB, etc.
let products = [
    {
        id: "prod1",
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://placehold.co/400x400/007bff/fff?text=Headphones",
        description: "High-fidelity sound with noise-cancellation and a sleek, comfortable design."
    },
    {
        id: "prod2",
        name: "Smart Watch",
        price: 149.99,
        image: "https://placehold.co/400x400/28a745/fff?text=Smart+Watch",
        description: "Track your fitness, notifications, and more with this feature-rich smart watch."
    },
    {
        id: "prod3",
        name: "Portable Charger",
        price: 29.99,
        image: "https://placehold.co/400x400/dc3545/fff?text=Charger",
        description: "Keep your devices charged on the go with this powerful and compact portable battery."
    }
];

// A simple in-memory cart for each user, mapped by userId.
const userCarts = {};

// --- API Endpoints ---

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Add a new product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    // Generate a simple ID for the new product
    newProduct.id = `prod${products.length + 1}`;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Get user's cart
app.get('/api/cart/:userId', (req, res) => {
    const { userId } = req.params;
    res.json(userCarts[userId] || {});
});

// Update user's cart
app.post('/api/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const cart = req.body;
    userCarts[userId] = cart;
    res.status(200).json(cart);
});

// --- Server Startup ---
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
