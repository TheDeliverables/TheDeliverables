require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5050 ;

const routes = require('./routes/route')

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());


//All api Routes (we can call this whatever)
app.use('/api', routes)


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))