# 🖧 Client-Server Architecture

## 📌 Overview

Client-Server Architecture is a foundational design pattern in computer networking and modern web development. It describes the **structured relationship** between two key components:

- **Client**: The requester of services or resources.
- **Server**: The provider of those services or resources.

They communicate over a **network** (usually the internet or a local network), following a **request-response model**.

---

## 🧠 How It Works

1. **Client Initiates Request**:
   - The client (e.g., a web browser or mobile app) sends a request to the server for data or service.
   - Example: `GET /products` to fetch a list of products.

2. **Server Processes Request**:
   - The server receives the request, performs necessary operations (like querying a database), and prepares a response.

3. **Server Sends Response**:
   - The server sends the result (e.g., JSON data or HTML page) back to the client.

---

## 🔄 Request-Response Cycle


---

## 🔧 Components

| Component | Description |
|----------|-------------|
| **Client** | A device or application that consumes services (e.g., browser, app) |
| **Server** | A program that handles requests and sends back responses |
| **API** | An interface exposed by the server to allow client interaction |
| **Network** | The medium through which data travels (HTTP, TCP/IP) |

---

## 🌐 Real-Life Example

Imagine visiting an online store:

- The browser (client) sends a request to the server: `GET /products`
- The server fetches data from the database
- Server sends back a response: `{ id: 1, name: "T-Shirt", price: 499 }`
- The client displays the product on the screen

---

## ⚙️ Advantages of Client-Server Architecture

- **Scalability**: Servers can handle multiple client requests simultaneously.
- **Security**: Sensitive data is handled and protected on the server side.
- **Maintenance**: Logic is centralized on the server, making updates easier.
- **Modularity**: Client and server can evolve independently.

---

## 📉 Limitations

- **Single Point of Failure**: If the server crashes, all clients are affected.
- **Latency**: Network communication introduces response time delays.
- **Server Load**: High number of clients can overload the server if not managed well.

---

## 🔄 Variations of Client-Server

- **Two-Tier**: Client ↔ Server (e.g., web browser ↔ web server)
- **Three-Tier**: Client ↔ Application Server ↔ Database Server
- **Distributed Systems**: Multiple servers or microservices handle different responsibilities


