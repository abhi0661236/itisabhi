import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';





const app = express(); // initialize express so that it can used.


// Now initialize dotenv so that we can get access to environment variables.
dotenv.config();
// Now create a .env file under your backend folder and create variables to be used by server
const PORT = process.env.PORT || 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);
app.use('', router);
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    console.log("Server is running at" + PORT)
});