require("dotenv").config();
const express = require('express');
const adminRoute = require("./routes/adminRoute");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("style"));
app.use(express.static("script"));

app.use("/admin", adminRoute);
app.get("/", (req, res) => res.send("hello"));

app.listen(2000, async () => {
    console.log("listening on http://localhost:2000");
});