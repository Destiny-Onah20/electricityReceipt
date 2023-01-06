const config = require("./config/config.json");
const express = require("express");
const electRoute = require("./routes/electRoute")
const port = 1800;
const app = express();

app.use(express.json());
app.use("/api", electRoute)

app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`)
})