# HTTP Error Codes Documentation

This document provides detailed information about commonly encountered HTTP error codes in API development.

---

## 🔴 400 Bad Request
- **Meaning:** The server cannot process the request due to client error (e.g., malformed request syntax, invalid request message framing).
- **Example Causes:**
  - Missing required fields in form submission
  - Invalid JSON payload
- **Fix:** Ensure correct request structure and parameters.

---

## 🔴 401 Unauthorized
- **Meaning:** Authentication is required and has failed or not been provided.
- **Example Causes:**
  - Missing token
  - Invalid API key
- **Fix:** Add valid authentication credentials to the request.

---

## 🔴 403 Forbidden
- **Meaning:** The server understands the request but refuses to authorize it.
- **Example Causes:**
  - Accessing a restricted resource without permission
- **Fix:** Ensure the user has the right access level.

---

## 🔴 404 Not Found
- **Meaning:** The requested resource could not be found.
- **Example Causes:**
  - Incorrect URL
  - Non-existent endpoint
- **Fix:** Verify the endpoint or resource exists.

---

## 🔴 409 Conflict
- **Meaning:** The request could not be completed due to a conflict with the current state of the resource.
- **Example Causes:**
  - Registering with an already taken username or email
- **Fix:** Change conflicting data and try again.

---

## 🔴 422 Unprocessable Entity
- **Meaning:** The server understands the content type and syntax of the request but was unable to process the contained instructions.
- **Example Causes:**
  - Validation errors in the payload
- **Fix:** Check and fix input data.

---

## 🔴 429 Too Many Requests
- **Meaning:** The user has sent too many requests in a given amount of time.
- **Example Causes:**
  - Exceeding rate limit
- **Fix:** Reduce request rate or implement retry logic.

---

## 🔴 500 Internal Server Error
- **Meaning:** A generic server error has occurred.
- **Example Causes:**
  - Unhandled exceptions
  - Database errors
- **Fix:** Check server logs and handle exceptions properly.

---

## 🔴 503 Service Unavailable
- **Meaning:** The server is currently unavailable (due to overload or maintenance).
- **Fix:** Try again later or check server status.

---
