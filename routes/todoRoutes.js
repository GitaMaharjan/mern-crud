const express = require("express");
const {
  addTodo,
  getTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.post("/", addTodo);
router.get("/", getTodo);
router.put("/:id", updateTodo);

module.exports = router;
