import { Request, Response } from "express";
import Todo from "../models/Todo";

export const createTodo = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { title, dueDate } = req.body;
        const newTodo = new Todo({
            title,
            dueDate,
            isCompleted: false,
        });
        await newTodo.save();
        res.status(201).json(newTodo); // Send the newly created todo
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const getTodosByDate = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { date } = req.params;
        const todos = await Todo.find({ dueDate: date });
        if (todos.length === 0) {
            res.status(404).json({ message: "No todos found for this date" });
            return; // Ensure we return to prevent further execution
        }
        res.status(200).json(todos);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json(todo);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const markTodoCompleted = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(
            id,
            { isCompleted: true },
            { new: true }
        );
        res.status(200).json(todo);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const unmarkTodoCompleted = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(
            id,
            { isCompleted: false },
            { new: true }
        );
        res.status(200).json(todo);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};
