import { artistArray } from "../../Front-end/Full-stack-week-hastag-project/src/assets/database/artists.js";
import { songsArray } from "../../Front-end/Full-stack-week-hastag-project/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtitsObj) => {
    const newArtitsObj = {...currentArtitsObj};
    delete newArtitsObj.id;

    return newArtitsObj;
});

const newSongstArray = songsArray.map((currentSongtsObj) => {
    const newArtitsObj = {...currentSongtsObj};
    delete newArtitsObj.id;

    return newArtitsObj;
});

const responseArtists = await db.collection("artists").insertMany(newArtistArray);
const responseSongs = await db.collection("songs").insertMany(newSongsArray);