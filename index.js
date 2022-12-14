require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', (req,res) => {
    res.send("OK");
})

mongoose.connect(process.env.DB_CONNECT)
.then(
    app.listen(() => {
        console.log("DB OK");
        app.listen(process.env.PORT, () => console.log("Server OK"))
    })
)