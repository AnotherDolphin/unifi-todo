import { Request, Response } from "express";
import ToDo, { ToDoDocument } from "../models/todo-model";
import User from "../models/user-model";

export const getToDoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, todoId } = req.params;
    const todo: ToDoDocument | null = await ToDo.findOne({
      _id: todoId,
      userId,
    });
    if (!todo) {
      res.status(404).json({ message: "ToDo not found" });
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createToDo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const body = req.body;

    // check if user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      res.status(400).json({ message: `User ID '${userId}' does not exist` });
      return;
    }

    // check if todo text already exists for the user
    const todoExists: ToDoDocument | null = await ToDo.findOne({
      text: body.text,
      userId,
    });
    if (todoExists) {
      res.status(400).json({ message: `ToDo '${body.text}' already exists for this user` });
      return;
    }

    // save and return the new todo
    const todo: ToDoDocument = new ToDo({
      text: body.text,
      userId,
    });
    const newToDo = await todo.save();
    res.status(201).json(newToDo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateToDo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, todoId } = req.params;
    const body = req.body;
    const todo: ToDoDocument | null = await ToDo.findOneAndUpdate(
      { _id: todoId, userId },
      body,
      { new: true }
    );
    if (!todo) {
      res.status(404).json({ message: "ToDo not found" });
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteToDo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, todoId } = req.params;
    const todo: ToDoDocument | null = await ToDo.findOneAndDelete({
      _id: todoId,
      userId,
    });
    if (!todo) {
      res.status(404).json({ message: "ToDo not found" });
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
