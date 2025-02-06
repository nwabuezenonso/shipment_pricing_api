# Shipping Cost Calculator API

This is a RESTful API that calculates shipping costs based on **weight, distance, and cargo type**. It uses **Node.js, Express, and MongoDB**.

## Features

- Store pricing data in MongoDB
- Calculate shipping costs dynamically
- Optimized queries for performance

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Installation

1. **Clone the repository**

```https
git clone https://github.com/nwabuezenonso/shipment_pricing_api.git
```

2. **Install dependencies**

```sh
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:

```
MONGO_URI=mongodb://localhost:27017/shippingDB
PORT=5000
```

4. **Seed the database with pricing data**

```sh
node seed.js
```

5. **Start the server**

```sh
npm start
```

The API will run on `http://localhost:5000` by default.

## API Endpoints

### 1. **Calculate Shipping Cost**

**Endpoint:** `POST /api/shipping/calculate`

**Request Body:**

```json
{
  "weight": 10,
  "distance": 50,
  "cargoType": "Fragile"
}
```

**Response:**

```json
{
  "totalCost": 150
}
```

## Dependencies

- Express - Web framework
- Mongoose - MongoDB ODM
- dotenv - Environment variable management
