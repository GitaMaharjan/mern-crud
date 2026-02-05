const express = require("express");
const { addTodo, getTodo } = require("../controllers/todoController");

const router = express.Router();

router.post("/", addTodo);
router.get("/", getTodo);

module.exports = router;
