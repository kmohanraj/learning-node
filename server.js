const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({message: "Welcome to MERN Stack"})
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



