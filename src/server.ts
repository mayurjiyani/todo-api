import dotenv from "dotenv";
import app from "./app";

// Load environment variables from .env file
dotenv.config();

// Get the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
