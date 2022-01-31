import express from 'express';

const app = express();

app.get("/teste", (req, res) => {
    return res.send("Olá Node!");
})

app.post("/teste-post", (req, res) => {
    return res.send("Rota POST");
})
// http://localhost:3000

app.listen(3000, () => console.log('Server is running!'));