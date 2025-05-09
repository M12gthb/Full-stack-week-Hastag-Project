import express from "express";
import cors from "cors"
import { db } from "./connect";

const app = express();

const PORT = 3001;

app.use(cors())


app.get("/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray())
});

app.get("/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray())
});

app.listen(PORT, () =>{
console.log(`Server is running on port ${PORT}`)
});