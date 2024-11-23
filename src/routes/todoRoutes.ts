import express from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import {
    createTodo,
    getTodosByDate,
    updateTodo,
    deleteTodo,
    markTodoCompleted,
    unmarkTodoCompleted,
} from "../controllers/todoController";

const router = express.Router();

router.post("/", authenticateToken, createTodo);
router.get("/:date", authenticateToken, getTodosByDate);
router.put("/:id", authenticateToken, updateTodo);
router.delete("/:id", authenticateToken, deleteTodo);
router.patch("/:id/complete", authenticateToken, markTodoCompleted);
router.patch("/:id/uncomplete", authenticateToken, unmarkTodoCompleted);

export default router;
