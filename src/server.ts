// src/server.ts
import express from "express";
import connectDB from "./db-conn";
import todoRouter from "./routes/todo-router";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/todos', todoRouter)

app.get("/", (req, res) => {
  res.send("Todo Todo!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
