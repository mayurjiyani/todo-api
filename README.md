# Todo API

A simple **Todo API** built with **Express** and **MongoDB** for managing tasks (todos). It includes user authentication via JWT and features such as creating, updating, deleting, and marking todos as completed.

## Features

-   User Registration and Login with JWT
-   CRUD operations on todos
-   Reminder notifications via email
-   JWT authentication for secure access

## Technologies

-   **Node.js** (Express)
-   **MongoDB**
-   **JWT** for authentication
-   **Bcryptjs** for password hashing
-   **Node-Cron** for reminders
-   **Nodemailer** for sending emails

## Setup

1. **Clone the repo**:

    ```bash
    git clone https://github.com/yourusername/todo-api.git
    cd todo-api
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    ```bash
    MONGO_URI=mongodb://localhost:27017/todo-app
    JWT_SECRET=your_jwt_secret
    MAILER_EMAIL=your_email@example.com
    MAILER_PASSWORD=your_email_password
    ```

4. **Start the server**:
    ```bash
    npm start
    ```
