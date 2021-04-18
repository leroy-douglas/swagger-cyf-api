const express = require("express");
const swagger = require("./config/swagger")

const PORT = process.env.PORT | 4000;
const app = express();

app.get("/",  (req, res) =>{
   res.send("Ah...ye olde document server"); 
});

app.use("/docs", swagger);

app.listen(PORT, console.log(`Listening on port ${PORT}`))