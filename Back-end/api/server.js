import express from "express";
import cors from "cors"
// import { artistArray } from "../database/artists.js";
// import { songsArray } from "../database/songs.js";
import { db } from "./connect.js";
const app = express();

const PORT = 3001;

app.use(cors())


app.get("/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray())
    // res.send(artistArray)
});

app.get("/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray())
    // res.send(songsArray)
});

app.listen(PORT, () =>{
console.log(`Server is running on port ${PORT}`)
});