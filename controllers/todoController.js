const Todo = require("../models/Todo");

const addTodo = async (req, res) => {
  try {
    // get title and description from client
    const { title, description } = req.body;
    //create new task in MongoDB
    const newTodo = await Todo.create({ title, description });
    // return created task to client
    res.status(201).json(newTodo);
  } catch (error) {
    // handle errors (e.g., missing title)
    res.status(400).json({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id; // Get the :id from the URL
    const updatedData = req.body; // Get the updated data from the request body

    console.log("Updating Todo ID:", req.params.id);
    console.log("Request body:", req.body);
    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      console.log("Todo not found in DB");

      return res.status(404).json({ message: "Todo not found" });
    }
    console.log("Updated Todo:", updatedTodo);

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id; // Get the :id from the URL
    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addTodo, getTodo, updateTodo, deleteTodo };
