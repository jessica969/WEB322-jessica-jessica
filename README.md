# Assignment 4 Overview

In this project, I've revamped the application to seamlessly interact with a PostgreSQL database using Sequelize. The primary focus is on performing CRUD operations for Orders, Users, and Products, ensuring a smooth integration with the chosen database.

## Key Features:

### CRUD Operations:
- **Orders:** Easily create, read, update, and delete orders.
- **Users:** Seamlessly manage user data with create, read, update, and delete functionalities.
- **Products:** Effortlessly handle product information through create, read, update, and delete operations.

### Database Integration:
- Utilizing PostgreSQL in conjunction with Sequelize for a robust database connection.

### Database Configuration:
- Database configuration has been consolidated within the `server.js` file for simplified management.

### Model Objects:
- Incorporating Sequelize objects tailored for Users, Products, and Orders.

### Relationships:
- Establishing meaningful relationships between Orders, Users, and Products.
- Bonus: Enjoy detailed user and product information when viewing an order.

### User Orders List:
- Bonus 2: The Users class now features a convenient list of user orders accessible at the "users/:id" endpoint.

## Getting Started (Prerequisites):

Ensure you have the following installed:

- Node.js
- PostgreSQL

## Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/jessica969/WEB322-jessica-jessica```
   
Navigate to the project folder:

bash

`cd WEB322-jessica-jessica`

Install dependencies:

bash

`npm install`

Usage:

To run the project locally, use:

bash

`npm start`

or

bash

`node server.js`

Access the server at: `http://localhost:3000/`

API Endpoints:

    GET /api/orders:
    Returns all orders from the database.

    GET /api/orders/:id:
    Retrieves a single order, complete with user and product details, based on the provided ID.

    DELETE /api/orders/:id:
    Deletes a specific order and provides a JSON object confirming the success of the operation.

    POST /api/orders:
    Adds a new order to the database and returns the newly created order in JSON format.

    PUT /api/orders/:id:
    Updates an existing order identified by the provided ID.

    GET /api/users/:id:
    Fetches details of a single user along with their order information, identified by the provided ID.

    Additional Endpoints:
    Similar CRUD endpoints are available for users and products.

    
Note:
I've extensively tested all CRUD endpoints using Postman, but since the database may currently have limited or no records, some features on the main page might not function as expected. However, you can still fully utilize and test the CRUD functionalities by interacting with the provided API endpoints.

# Sample Database Records

## Users

### User 1
- ID: 1
- First Name: Sakura
- Last Name: Yamamoto
- Email: sakura.yamamoto@example.com
- Password: hashed_password
- Date of Birth: 1990-05-15
- Company: Tech Co., Ltd.
- Phone: 080-1234-5678

{
      "id": 1,
      "name": "Sakura Yamamoto",
      "email": "sakura.yamamoto@example.com",
      "password": "hashed_password",
      "birthday": "1990-05-15",
      "company": "Tech Co., Ltd.",
      "phone": "080-1234-5678"
    }

## Products

### Product 1
- ID: 1
- Name: Laptop
- ISBN: LAPTOP123
- Price: ¥120000.00
- Description: Lightweight and high-performance laptop computer.

{
      "id": 1,
      "name": "Laptop",
      "isbn": "LAPTOP123",
      "price": 120000.00,
      "description": "Super cool and lightweight laptop!"
    }
    
## Orders

### Order 1
- ID: 1
- User ID: 1
- Product ID: 1

{
      "id": 1,
      "userId": 1,
      "productId": 1
    }
  
