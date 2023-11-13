// routes/apiRouter.js
const express = require('express');
const apiRouter = express.Router();
const userService = require('../services/userService');
const productService = require('../services/productService');
const authenticationService = require('../services/authenticationService');

// Users Endpoints
apiRouter.get('/users', userService.getAllUsers);
apiRouter.get('/users/:id', userService.getUserById);
apiRouter.delete('/users/:id', userService.deleteUser);
apiRouter.post('/users', userService.addUser);

// Products Endpoints
apiRouter.get('/products', productService.getAllProducts);
apiRouter.get('/products/:id', productService.getProductById);
apiRouter.delete('/products/:id', productService.deleteProduct);
apiRouter.post('/products', productService.addProduct);

// Login Endpoint
apiRouter.post('/login', authenticationService.login);

module.exports = apiRouter;
