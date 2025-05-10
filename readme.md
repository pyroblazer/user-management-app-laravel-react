# User Management App

This is a full-stack web application that provides a simple user management interface built with Laravel for the backend and ReactJS for the frontend. It allows authenticated users to perform CRUD operations on a list of users.

## Features

### Backend (Laravel)

The backend is built using Laravel and provides a RESTful API with the following features:

* **User Listing**:
  Authenticated users can retrieve a complete list of users, including their ID, name, email, and registration date.

* **User Creation**:
  Authenticated users can create a new user by submitting a name, email, and password. All inputs are validated before saving to the database.

* **User Detail**:
  Authenticated users can view the details of a specific user by their unique ID.

* **User Deletion**:
  Authenticated users can delete a specific user by ID.

All API routes are protected using Laravel Auth Sanctum and require the user to be authenticated to access them.

### Frontend (ReactJS with Vite)

The frontend is built using ReactJS and communicates with the Laravel API using Axios. It provides a clean and functional interface with the following features:

* **User List View**:
  Displays a list of users fetched from the API, including basic user information.

* **User Creation Form**:
  Includes a form for adding a new user, with input fields for name, email, and password.

* **Authentication Handling**:
  The frontend handles authentication using token-based login. Tokens are securely stored and attached to requests to authenticate the user session.

* **Protected Routes**:
  Pages like the user list and user creation are only accessible once the user is authenticated.

## Installation Steps

Follow these instructions to set up the project locally:

### Backend (Laravel)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/pyroblazer/user-management-app-laravel-react
   cd user-management-app-laravel-react
   ```

2. **Install Dependencies**

   ```bash
   composer install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Configure Database**
   Edit the `.env` file and set your database credentials.

5. **Run Migrations**

   ```bash
   php artisan migrate
   ```

6. **Run the Server**

   ```bash
   php artisan serve
   ```

### Frontend (ReactJS with Vite)

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Run the Dev Server**

   ```bash
   pnpm run dev
   ```

Make sure the backend is running before using the frontend