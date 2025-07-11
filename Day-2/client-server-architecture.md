# 📘 Express.js and Web Frameworks

## 🧩 What is Express.js?

**Express.js** is a minimalist and flexible web application framework for **Node.js**. It provides robust features for building **RESTful APIs** and web applications.

### 🔧 Key Features of Express.js:

* Minimal setup and configuration
* Routing via HTTP methods (GET, POST, etc.)
* Middleware support
* Fast performance (built on Node.js)
* Easily integrates with databases and templating engines

### 🚀 Basic Example:

```typescript
import express from 'express';
const app = express();

app.use(express.json()); // Parse JSON body

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## 🌐 Why Use a Framework?

Without a framework, developers would need to write all HTTP handling, routing, and utilities from scratch using Node.js core modules.

### ✅ Benefits of Frameworks:

* Provide **structure** and **organization**
* Simplify **request/response** handling
* Support **middlewares** (auth, logging, etc.)
* Handle **routing** efficiently
* Speed up **development time**
* Help manage **scalable** and **maintainable** code

---

## 🌍 REST API: Overview and Components

### What is a REST API?

A **REST API** (Representational State Transfer) is an architectural style that uses HTTP to communicate between a client and server.

### 🔑 Key REST Components:

| Component        | Description                         | Example              |
| ---------------- | ----------------------------------- | -------------------- |
| **Endpoint**     | URL representing a resource         | `/api/users`         |
| **Method**       | HTTP verb indicating action         | `GET`, `POST`, etc.  |
| **Status Code**  | Server response indicator           | `200`, `404`, `500`  |
| **Request Body** | Data sent from client to server     | `{ "name": "John" }` |
| **Response**     | JSON or data returned by the server | `{ "id": 1 }`        |
| **Headers**      | Meta-info about request/response    | `Content-Type: JSON` |

### ⚙️ Common REST Methods:

| Method | Purpose     | Example           |
| ------ | ----------- | ----------------- |
| GET    | Read data   | `GET /users`      |
| POST   | Create data | `POST /users`     |
| PUT    | Update data | `PUT /users/:id`  |
| DELETE | Remove data | `DELETE /users/1` |

---

## 🔧 Other Node.js Frameworks Overview

| Framework    | Description                                 | Use Case                            |
| ------------ | ------------------------------------------- | ----------------------------------- |
| **Fastify**  | Fast, schema-based validation, low overhead | High-performance APIs               |
| **NestJS**   | Angular-inspired, uses decorators, modular  | Large-scale enterprise applications |
| **Koa.js**   | Lightweight, async/await-first, modern      | Minimalist apps                     |
| **Hapi.js**  | Plugin-rich, validation built-in            | Secure and scalable apps            |
| **Sails.js** | MVC-based, supports real-time apps          | Data-driven & socket-heavy projects |

---

## ✅ Summary Checklist

* [x] Express.js is a minimal, fast web framework for Node.js.
* [x] Frameworks simplify HTTP handling, routing, middleware, and structure.
* [x] REST APIs use standard HTTP methods to interact with resources.
* [x] Other frameworks like Fastify, NestJS, Koa.js offer alternatives based on need.

---

This document serves as a foundational reference for understanding the client-server architecture with Express.js and RESTful APIs.
