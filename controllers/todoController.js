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



module.exports = { addTodo, getTodo };
