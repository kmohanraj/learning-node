#### Create MERN Stack App

```
mkdir learning-node
cd learning-node
```

##### Initialize the Node.js App with a package.json file
```
npm init
```

##### We need to install necessary modules: `express, sequelize, mysql2 and body-parser` Run the command

```
npm install express sequelize mysql2 body-parser cors --save
```

##### Let’s create a new server.js file

```js
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
```

Next run the app,
```
node server.js
```


