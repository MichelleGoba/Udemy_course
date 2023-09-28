import express from "express";
const app = express();
const port = 3000;

// location of the server

app.listen(3000, () => {
    console.log(`Server running on port ${port}.`); // callback unction to be triggered when the server is set up
});