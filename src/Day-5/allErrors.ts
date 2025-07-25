const express = require('express');
const createError = require('http-errors');
import { Request,Response,NextFunction } from "express";
const app = express();
import { HttpError } from 'http-errors';
app.use(express.json());

// 400 - Bad Request
app.post('/bad-request', (req:Request, res:Response, next:NextFunction) => {
  if (!req.body.email) {
    return next(createError(400, 'Email is required'));
  }
  res.send('Valid Request');
});

// 401 - Unauthorized
app.get('/unauthorized', (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(createError(401, 'No token provided'));
  }
  res.send('Authorized');
});

//  403 - Forbidden
app.get('/forbidden', (req:Request, res:Response, next:NextFunction) => {
  const user = { role: 'user' };
  if (user.role !== 'admin') {
    return next(createError(403, 'Access denied'));
  }
  res.send('Admin Access');
});

//  409 - Conflict
app.post('/conflict', (req:Request, res:Response, next:NextFunction) => {
  const existingEmail = 'test@example.com';
  if (req.body.email === existingEmail) {
    return next(createError(409, 'Email already exists'));
  }
  res.send('Registered');
});

//  422 - Unprocessable Entity
app.post('/validate', (req:Request, res:Response, next:NextFunction) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return next(createError(422, 'Password must be at least 6 characters'));
  }
  res.send('Valid Password');
});

//  500 - Internal Server Error
app.get('/crash', (req:Request, res:Response, next:NextFunction) => {
  throw new Error('Simulated server crash');
});



//🔹 404 - Not Found
app.use((req:Request, res:Response, next:NextFunction) => {
  next(createError(404, 'Route not found'));
});

//  Centralized Error Handler
app.use((err:HttpError, req:Request, res:Response, next:NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});
