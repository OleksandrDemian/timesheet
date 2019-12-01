const express = require("express");

const server = express();
const PORT = 4545;

server.get("/test", (req, res) => {
    res.json({ ciao: true });
    res.end();
});

server.listen(PORT);
console.log("Server started");
