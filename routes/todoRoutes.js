const router = require("express").Router()
const todoController = require("./../controllers/todoControllers")
router
    .get("/", todoController.getTodos)
    .post("/add", todoController.addTodo)
    .put("/update/:id", todoController.updateTodos)
    .delete("/delete/:id", todoController.deleteTodos)
module.exports = router