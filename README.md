Browser-Notes

Welcome to **Browser-Notes**, your go-to platform for effortlessly capturing, organizing, and securing your thoughts, ideas, and tasks. Designed with the modern user in mind, Browser-Notes combines simplicity with powerful features to ensure that every note you take is easily accessible and completely secure. 

With Browser-Notes, you can stay organized and productive—whether you're jotting down reminders, creating to-do lists, brainstorming ideas, or keeping a personal journal. The application’s intuitive interface and robust security protect your data while making it available whenever and wherever you need it. 

Let Browser-Notes transform how you manage your information, giving you a clutter-free space to capture what matters most.


## Introduction

Browser-Notes is designed to streamline the note-taking process, providing users with a secure and efficient way to store and retrieve their notes. With a simple interface and secure authentication, it’s built to keep users focused on their tasks and notes without distraction.

### Authors:
- [Olusegun Tayo - LinkedIn](https://www.linkedin.com/in/oluseguntayo) | [GitHub](https://www.github.com/OluTshegz/browser-notes)

## Installation

To set up Browser-Notes locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/username/browser-notes.git
cd backend 

### Set Up Environment Variables

Create a `.env` file in the root directory and set the following variables with your MongoDB URI and JWT secret configuration:

env

`MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret` 

### Backend Setup

1.  **Install dependencies**:
    
    bash
    
    `cd backend
    npm install` 
    
2.  **Start the backend server**:
    
    bash

    `npm run start` 
    
    The server will run at `http://localhost:5000`.

### Frontend Setup

Navigate to the `client` directory and install dependencies:

bash

`cd client
npm install` 

**Start the frontend development server**:

bash

`npm run dev` 

The frontend will be available at `http://localhost:5173`.

## Usage

To use Browser-Notes, access the application in your browser at `http://localhost:5173`. Here are the main features:

-   **Register and Login** to securely access your notes.
-   **Add, Edit, and Delete Notes** directly from your account.
-   **Search** for specific notes through the search bar for quick access.

Enjoy a seamless note management experience with a clean, intuitive UI.

### Main Routes

-   **Home Page:** `/` - Displays all notes for authenticated users.
-   **Login Page:** `/login` - Log into your account.
-   **Signup Page:** `/signup` - Create a new account.

## API Endpoints

All endpoints are prefixed with `http://localhost:5000`.

### Authentication Endpoints

-   **Register** `/api/auth/register`
    
    -   **Description:** Registers a new user.
    -   **Method:** POST
    -   **Protection:** Non-Protected
-   **Login** `/api/auth/login`
    
    -   **Description:** Authenticates user credentials and provides a JWT token.
    -   **Method:** POST
    -   **Protection:** Non-Protected
-   **Logout** `/api/auth/logout`
    
    -   **Description:** Logs the user out.
    -   **Method:** DELETE
    -   **Protection:** Protected
-   **Verify User** `/api/auth/verify`
    
    -   **Description:** Verifies the JWT and returns user details.
    -   **Method:** GET
    -   **Protection:** Protected

### Note Endpoints

-   **Get All Notes** `/api/note`
    
    -   **Description:** Retrieves notes for the authenticated user.
    -   **Method:** GET
    -   **Protection:** Protected
-   **Add Note** `/api/note/add`
    
    -   **Description:** Creates a new note.
    -   **Method:** POST
    -   **Protection:** Protected
-   **Edit Note** `/api/note/:id`
    
    -   **Description:** Updates a specific note.
    -   **Method:** PUT
    -   **Protection:** Protected
-   **Delete Note** `/api/note/:id`
    
    -   **Description:** Deletes a specific note.
    -   **Method:** DELETE
    -   **Protection:** Protected

## Contributing

We welcome contributions to Browser-Notes! Follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push -u origin feature-branch`).
5.  Create a Pull Request.

## License

This project is currently not licensed yet.