# Todo Node App

This is a simple todo app built on Node.js, Express, Typescript and MongoDB.

## Installation
1. Clone the repository
2. Run `npm install`

## Run Development
- Run `npm run dev` to start a dev (nodemon) server
- or `npm start` to start a live typescript server

## Run Production
1. Run `npm run build` to build the project (this will create a dist folder)
2. Run `npm run start:prod` to start the javascript live server

## Usage
1. Start local MongoDB server and create a database called `todo`
2. Create a collection called 'users' and add this document:
```json
{
  "_id": {
    "$oid": "6589a46a5ab0441dbce44b04"
  },
  "name": "Joe Manchin"
}
```
3. Open `http://localhost:3000` in your browser to make sure the server is running (you should see a "Todo Todo!" message)
4. Import the Postman collection from `todo.postman_collection.json`
5. Make requests to the API

## API Endpoints

The following API endpoints are available for managing todos:

### Get a specific todo by ID for a user

Retrieves a specific todo item by its ID for a given user.

- **URL:** `/api/todos/:userId/:todoId`
- **Method:** GET
- **Parameters:**
  - `userId` (required): The ID of the user.
  - `todoId` (required): The ID of the todo item.
- **Response:** The JSON representation of the todo item.

### Create a new todo for a user

Creates a new todo item for a given user.

- **URL:** `/api/todos/:userId`
- **Method:** POST
- **Parameters:**
  - `userId` (required): The ID of the user.
- **Request Body:** The JSON representation of the new todo item.
- **Response:** The JSON representation of the created todo item.

### Update a todo for a user

Updates an existing todo item for a given user.

- **URL:** `/api/todos/:userId/:todoId`
- **Method:** PUT
- **Parameters:**
  - `userId` (required): The ID of the user.
  - `todoId` (required): The ID of the todo item.
- **Request Body:** The JSON representation of the updated todo item.
- **Response:** The JSON representation of the updated todo item.

### Delete a todo for a user

Deletes a specific todo item for a given user.

- **URL:** `/api/todos/:userId/:todoId`
- **Method:** DELETE
- **Parameters:**
  - `userId` (required): The ID of the user.
  - `todoId` (required): The ID of the todo item.
- **Response:** A success message indicating the deletion.

### Get all todos for a user (available only in func5 branch)

Retrieves all todo items for a given user.

- **URL:** `/api/todos/:userId`
- **Method:** GET
- **Parameters:**
  - `userId` (required): The ID of the user.
- **Response:** The JSON representation of the todo items.

