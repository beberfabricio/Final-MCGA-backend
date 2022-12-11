require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const authMiddleware = require('./middlewares/auth');

const app = express();
app.use(express.json());
app.use('/', authMiddleware, routes);

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