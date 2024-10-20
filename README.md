# Full-Stack Notes Application: Browser Notes

## Overview

This project is a simple full-stack notes application built using **Django** on the backend and **React** on the frontend. The application allows users to register, login, create, view, and delete notes. It uses **JWT** for authentication, and **Axios** for making API requests from the frontend. The backend API is developed with **Django REST Framework**, and the frontend interacts with it to provide a responsive UI.

## Features

-   User registration and authentication with JWT
-   Protected routes and token management (access/refresh tokens)
-   Create, view, and delete notes
-   Responsive design
-   JWT token expiration and refresh handled automatically

## Technologies

-   **Backend**:
    -   Django
    -   Django REST Framework
    -   Django CORS Headers
    -   Django SimpleJWT for authentication
-   **Frontend**:
    -   React
    -   Axios for HTTP requests
    -   React Router for routing

## Installation and Setup

### Backend Setup

1.  Clone the repository and navigate to the `backend/` directory:
    
    `git clone <repository-url>
    cd backend` 
    
2.  Create a virtual environment and install dependencies:
    
    `python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt` 
    
3.  Run database migrations:
    
    `python manage.py migrate` 
    
4.  Start the development server:
    
    `python manage.py runserver` 
    

### Frontend Setup

1.  Navigate to the `frontend/` directory:
    
    `cd ../frontend` 
    
2.  Install dependencies:
    
    `npm install` 
    
3.  Create an `.env` file in the `frontend/` directory and add the backend API URL:
    
    `VITE_API_URL=http://127.0.0.1:8000` 
    
4.  Start the frontend development server:
    
    `npm run dev` 
    

## File Structure

### Backend (`backend/`)

-   **`backend/settings.py`**: Configures the Django project settings, including JWT token settings, installed apps, middleware, CORS settings, and database configuration.
-   **`backend/urls.py`**: Defines URL patterns for the Django admin panel, user registration, token authentication, and the notes API.
-   **`api/models.py`**: Contains the `Note` model which stores notes with a title, content, created date, and author.
-   **`api/serializers.py`**: Defines serializers for the `User` and `Note` models.
-   **`api/views.py`**: Implements views for user registration, note creation, listing, and deletion.
-   **`api/urls.py`**: Maps the views to API endpoints for listing, creating, and deleting notes.
-   **`requirements.txt`**: Lists all backend dependencies.

### Frontend (`frontend/`)

-   **`src/components/LoadingIndicator.jsx`**: Displays a loading spinner while API requests are in progress.
-   **`src/components/Note.jsx`**: Displays individual note data and provides a delete button.
-   **`src/components/ProtectedRoute.jsx`**: Protects routes that require authentication, handling token expiration and refresh.
-   **`src/pages/Home.jsx`**: Home page displaying a list of notes, and providing a form to create a new note.
-   **`src/pages/Login.jsx`**: Login page where users can log in with their credentials.
-   **`src/pages/Register.jsx`**: Registration page for new users to sign up.
-   **`src/pages/NotFound.jsx`**: Displays a 404 page when a route is not found.
-   **`src/api.js`**: Configures Axios to make API requests with JWT tokens.
-   **`src/constants.js`**: Defines constants for localStorage token keys.

## API Endpoints

### Backend API

-   **POST /api/user/register/**: Register a new user.
-   **POST /api/token/**: Obtain an access and refresh token.
-   **POST /api/token/refresh/**: Refresh the access token.
-   **GET /api/notes/**: Retrieve a list of notes for the authenticated user.
-   **POST /api/notes/**: Create a new note.
-   **DELETE /api/notes/delete/{id}/**: Delete a note by its ID.

### Example API Requests

1.  **User Registration**:
    
    `POST /api/user/register/
    {
      "username": "newuser",
      "password": "password123"
    }` 
    
2.  **User Login**:
    
    `POST /api/token/
    {
      "username": "newuser",
      "password": "password123"
    }` 
    
3.  **Create a Note**:
    
    `POST /api/notes/
    Authorization: Bearer <access_token>
    {
      "title": "My First Note",
      "content": "This is the content of my first note."
    }` 
    
4.  **Delete a Note**:
    
    `DELETE /api/notes/delete/1/
    Authorization: Bearer <access_token>` 
    

## JWT Authentication

The frontend uses **JWT tokens** for authentication. When a user logs in, an access token and a refresh token are stored in `localStorage`. The **access token** expires in 2 hours, and the **refresh token** expires in 1 day. If the access token expires, the frontend automatically refreshes it using the refresh token.

Protected routes in the frontend (such as viewing or creating notes) are guarded by the `ProtectedRoute` component, which checks the token expiration and refreshes it if necessary.

## Security Considerations

-   **Token Storage**: JWT tokens are stored in `localStorage`, which can be vulnerable to XSS attacks. Consider switching to HTTP-only cookies for enhanced security in production.

## Future Improvements

-   Implement user profile management.
-   Add more detailed error handling on the frontend.
-   Implement pagination and search functionality for notes.
-   Improve the UI/UX design.

## License

This project is not yet licensed (under the MIT License).

----------

This `README.md` file provides clear guidance on how to set up and use the application, as well as detailed information on its structure, features, and API endpoints.
