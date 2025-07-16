# Middleware in Web Development

## What is Middleware?

**Middleware** is software that acts as a bridge between different parts of an application. In web development, middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next()` middleware function in the application’s request-response cycle.

It is primarily used to:

* Modify request and response objects.
* Execute any code before reaching the final route handler.
* End the request-response cycle.
* Call the next middleware in the stack.

---

## Middleware in Express.js

In **Express.js**, middleware functions are executed sequentially. They can perform various tasks like:

* Logging
* Authentication
* Validation
* Parsing request bodies
* Error handling

### Basic Syntax

```javascript
function middlewareFunction(req, res, next) {
  // Middleware logic here
  next(); // Pass control to the next middleware
}
```

### Registering Middleware

```javascript
const express = require("express");
const app = express();

app.use(middlewareFunction);
```

---

## Types of Middleware

### 1. **Application-Level Middleware**

Used across the whole app.

```javascript
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
```

### 2. **Router-Level Middleware**

Bound to an instance of `express.Router()`.

```javascript
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router Middleware");
  next();
});
```

### 3. **Built-in Middleware**

Express provides some built-in middleware:

* `express.json()` – Parses JSON bodies.
* `express.urlencoded()` – Parses URL-encoded bodies.
* `express.static()` – Serves static files.

```javascript
app.use(express.json());
app.use(express.static("public"));
```

### 4. **Error-Handling Middleware**

Defined with four arguments: `(err, req, res, next)`

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

## Use Cases

* **Authentication** – Validate tokens, sessions, or API keys.
* **Authorization** – Control access to resources.
* **Logging** – Track requests and responses.
* **Rate Limiting** – Prevent abuse by limiting requests.
* **Input Validation** – Sanitize and validate incoming data.
* **Error Handling** – Catch and handle application errors.

---

## Example: Custom Logger Middleware

```javascript
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});
```

---


