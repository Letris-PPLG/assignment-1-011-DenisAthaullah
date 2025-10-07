import express from "express";

const app = express();
app.use(express.json());


let todos = [
    { "id": 1, title : "Belajar Node.js", done : false },
    { "id": 2, title : "Belajar Express.js", done : true }
]

app.get("/todos", (req, res) =>{
    res.json(todos);
});

app.post("/todos", (req, res) =>{
    const { title,done } = req.body;
    const newTodo = { id: todos.length + 1, title:title, done:done };
    todos.push(newTodo)
    res.status(201).json(newTodo);
});

app.get("/msg", (req, res) => {
    res.json({msg: "API Berjalan Normal", code: 200});
})

app.listen(5001, () => console.log("Server running on http://localhost:5001"))