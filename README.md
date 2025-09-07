Dynamic E-Commerce Landing Page
This project is a dynamic, single-page e-commerce website that simulates a modern shopping experience with a focus on a clean, responsive user interface. It features a product catalog, a functional shopping cart, and a simple admin panel for adding new products, all built within a single HTML file.

The application uses a simulated Node.js/Express backend to handle data persistence for products and cart items, allowing the front-end to showcase dynamic content.

Features
Responsive Design: A fully responsive layout that looks great on both mobile and desktop devices, styled with Tailwind CSS.

Dynamic Product Display: Fetches and displays a list of products from a simulated backend.

Shopping Cart: Users can add products to a persistent shopping cart, with the total price automatically calculated.

Product Details Page: Click on a product to view its detailed information.

Admin Panel: A simple form to add new products to the database.

Modular Navigation: A single-page application with a dynamic content area for seamless navigation.

Technology Stack
Frontend:

HTML5: The core structure of the web page.

JavaScript (ES6+): Manages the application logic, DOM manipulation, and data fetching.

Tailwind CSS: A utility-first CSS framework for rapid and consistent styling.

Backend:

Node.js: The JavaScript runtime environment.

Express.js: A minimal web framework for creating the API endpoints.

How to Run Locally
To get this project up and running on your local machine, you'll need both the frontend index.html file and a running backend server.

Backend Setup:

Make sure you have Node.js installed on your system.

You will need a backend server file, such as express-server.js (not included in this file but required for the app to function correctly).

Run npm install express nodemon in your terminal to install the necessary dependencies.

Start the server with nodemon express-server.js. The server should run on http://localhost:3000.

Frontend Setup:

Save the index.html file to your local machine.

Open index.html in your web browser. Ensure the Express server is running first, as the page will attempt to fetch data from it immediately.

Usage
Home: View the main landing page with featured sections and all products.

Admin: Navigate to the Admin page to add a new product by filling out the form. The new product will appear in the main product list after you submit it.

Shopping: Click the "Add to Cart" button on any product to add it to the cart. You can see the updated cart items and total in the sidebar.

Future Enhancements
User Authentication: Implement a full user sign-in and sign-up system using Firebase Authentication or a similar service.

Database Integration: Replace the in-memory backend with a real database like Firebase Firestore or MongoDB for persistent data.

Cart Management: Add functionality to remove items from the cart, or update item quantities.

Checkout Process: Build a full checkout flow with payment processing.
