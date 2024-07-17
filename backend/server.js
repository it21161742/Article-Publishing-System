const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbconnection = require('./configs/dbconnection');

//connect to mongoDB
dbconnection();

const app = express();
const PORT = process.env.PORT || 2500;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//http://localhost:4000/article
app.use('/article', require('./routes/ArticleRoutes'));


//start the server 
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})