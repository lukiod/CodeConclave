
# API Documentation

This document provides a comprehensive guide to the Code Editor API endpoints, request/response formats, and authentication requirements.

## Base URL

For local development: `http://localhost:5000/api`
For production: `https://your-deployed-app.vercel.app/api`

## Authentication

Most API endpoints require authentication using JSON Web Tokens (JWT).
To authenticate requests, include an `Authorization` header with a Bearer token:

```
Authorization: Bearer <your_token>
```

A token is obtained by logging in via the `/auth/login` endpoint.

## Error Handling

The API returns standard HTTP status codes to indicate success or failure:

- `200 OK`: Request succeeded
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Authentication failed or missing
- `403 Forbidden`: Authenticated user doesn't have required permissions
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

Error responses follow this format:

```json
{
  "message": "Error message describing the issue"
}
```

## API Endpoints

### Authentication

#### Register a new user

```
POST /auth/register
```

Request body:

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

Response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "profilePicture": ""
  }
}
```

#### Login

```
POST /auth/login
```

Request body:

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

Response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "profilePicture": ""
  }
}
```

#### Get current user

```
GET /auth/me
```

Response:

```json
{
  "id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "profilePicture": "",
  "projects": ["project_id_1", "project_id_2"]
}
```

### Projects

#### Get all projects

```
GET /projects
```

Response:

```json
[
  {
    "_id": "project_id_1",
    "name": "My Project",
    "description": "Project description",
    "owner": {
      "_id": "user_id",
      "username": "johndoe",
      "email": "john@example.com"
    },
    "collaborators": [],
    "isPublic": false,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  // More projects...
]
```

#### Get a specific project

```
GET /projects/:id
```

Response:

```json
{
  "_id": "project_id",
  "name": "My Project",
  "description": "Project description",
  "owner": {
    "_id": "user_id",
    "username": "johndoe",
    "email": "john@example.com"
  },
  "collaborators": [
    {
      "user": {
        "_id": "collaborator_id",
        "username": "janedoe",
        "email": "jane@example.com"
      },
      "role": "editor"
    }
  ],
  "files": ["file_id_1", "file_id_2"],
  "isPublic": false,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Create a new project

```
POST /projects
```

Request body:

```json
{
  "name": "New Project",
  "description": "Project description",
  "isPublic": false
}
```

Response:

```json
{
  "_id": "new_project_id",
  "name": "New Project",
  "description": "Project description",
  "owner": "user_id",
  "collaborators": [],
  "files": [],
  "isPublic": false,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Update a project

```
PUT /projects/:id
```

Request body:

```json
{
  "name": "Updated Project Name",
  "description": "Updated description",
  "isPublic": true
}
```

Response:

```json
{
  "_id": "project_id",
  "name": "Updated Project Name",
  "description": "Updated description",
  "owner": "user_id",
  "collaborators": [],
  "files": ["file_id_1", "file_id_2"],
  "isPublic": true,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Delete a project

```
DELETE /projects/:id
```

Response:

```json
{
  "message": "Project deleted successfully"
}
```

#### Share a project

```
POST /projects/:id/share
```

Request body:

```json
{
  "email": "collaborator@example.com",
  "role": "editor"  // "viewer", "editor", or "admin"
}
```

Response:

```json
{
  "_id": "project_id",
  "name": "Project Name",
  "description": "Project description",
  "owner": "user_id",
  "collaborators": [
    {
      "user": "collaborator_id",
      "role": "editor"
    }
  ],
  "files": ["file_id_1", "file_id_2"],
  "isPublic": false,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Remove a collaborator

```
DELETE /projects/:id/collaborators/:userId
```

Response:

```json
{
  "_id": "project_id",
  "name": "Project Name",
  "description": "Project description",
  "owner": "user_id",
  "collaborators": [],
  "files": ["file_id_1", "file_id_2"],
  "isPublic": false,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Files

#### Get all files for a project

```
GET /projects/:projectId/files
```

Response:

```json
[
  {
    "_id": "file_id_1",
    "name": "index",
    "type": "file",
    "extension": ".js",
    "content": "console.log('Hello World');",
    "parentId": null,
    "children": [],
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  {
    "_id": "file_id_2",
    "name": "src",
    "type": "directory",
    "extension": "",
    "content": "",
    "parentId": null,
    "children": ["file_id_3"],
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  // More files...
]
```

#### Get a specific file

```
GET /projects/:projectId/files/:fileId
```

Response:

```json
{
  "_id": "file_id",
  "name": "app",
  "type": "file",
  "extension": ".js",
  "content": "// JavaScript code here",
  "parentId": "directory_id",
  "children": [],
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Create a new file or directory

```
POST /projects/:projectId/files
```

Request body:

```json
{
  "name": "app",
  "type": "file",  // "file" or "directory"
  "extension": ".js",  // Required for files, not for directories
  "content": "// JavaScript code here",  // Optional for files
  "parentId": "directory_id"  // Optional, null for root level
}
```

Response:

```json
{
  "_id": "new_file_id",
  "name": "app",
  "type": "file",
  "extension": ".js",
  "content": "// JavaScript code here",
  "parentId": "directory_id",
  "children": [],
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Update file content

```
PUT /projects/:projectId/files/:fileId
```

Request body:

```json
{
  "content": "// Updated JavaScript code here"
}
```

Response:

```json
{
  "_id": "file_id",
  "name": "app",
  "type": "file",
  "extension": ".js",
  "content": "// Updated JavaScript code here",
  "parentId": "directory_id",
  "children": [],
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Delete a file or directory

```
DELETE /projects/:projectId/files/:fileId
```

Response:

```json
{
  "message": "File deleted successfully"
}
```

## WebSocket API (Future Enhancement)

Real-time collaboration features will be implemented using WebSockets. Documentation for the WebSocket API will be added in a future version.

## Rate Limiting

The API implements rate limiting to prevent abuse. Limits are as follows:

- Authentication endpoints: 20 requests per minute
- Other endpoints: 60 requests per minute per user

When rate limits are exceeded, the API returns a 429 Too Many Requests status code.

## API Versioning

This API is currently at version 1. The version is not reflected in the URL structure but will be included in future iterations as needed.

## Support

For API support or to report issues, please contact us at support@codeeditor.com or open an issue on our GitHub repository.
