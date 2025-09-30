# Logo API Documentation

This document describes the API endpoints for managing logos in the ClawnCore system.

## Base URL

All endpoints are relative to: `/api/logos`

## Authentication

Some endpoints require authentication. Authenticated endpoints are marked with a lock icon 🔒.

## Endpoints

### Get All Logos

```
GET /api/logos
```

Returns all logos in the system.

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "string",
    "description": "string",
    "imageUrl": "string",
    "category": "string",
    "isFeatured": "boolean",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
]
```

### Get Featured Logos

```
GET /api/logos/featured
```

Returns featured logos. Optionally accepts a `limit` query parameter.

**Parameters:**
- `limit` (optional): Number of logos to return (default: 6)

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "string",
    "description": "string",
    "imageUrl": "string",
    "category": "string",
    "isFeatured": "boolean",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
]
```

### Get Logo by ID

```
GET /api/logos/{id}
```

Returns a specific logo by its ID.

**Response:**
```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "imageUrl": "string",
  "category": "string",
  "isFeatured": "boolean",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Create Logo 🔒

```
POST /api/logos
```

Creates a new logo.

**Request Body:**
```json
{
  "name": "string",
  "description": "string (optional)",
  "imageUrl": "string",
  "category": "string",
  "isFeatured": "boolean (optional, default: false)"
}
```

**Response:**
```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "imageUrl": "string",
  "category": "string",
  "isFeatured": "boolean",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Update Logo 🔒

```
PATCH /api/logos/{id}
```

Updates an existing logo.

**Request Body:**
```json
{
  "name": "string (optional)",
  "description": "string (optional)",
  "imageUrl": "string (optional)",
  "category": "string (optional)",
  "isFeatured": "boolean (optional)"
}
```

**Response:**
```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "imageUrl": "string",
  "category": "string",
  "isFeatured": "boolean",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete Logo 🔒

```
DELETE /api/logos/{id}
```

Deletes a logo by its ID.

**Response:**
```json
{
  "message": "Logo deleted successfully"
}
```

## Error Responses

All endpoints may return the following error responses:

- `400 Bad Request`: Invalid request data
- `401 Unauthorized`: Authentication required
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

**Error Response Format:**
```json
{
  "message": "Error description"
}
```