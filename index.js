require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.get('/', (req,res) => {
    res.send("OK");
})

mongoose.connect(process.env.DB_CONNECT)
.then(
    app.listen(() => {
        console.log('DB running');
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
    })
)
.catch((error) => {
        res.status(500).json({msg: 'No se pudo conectar con la base de datos', error})
    }
)