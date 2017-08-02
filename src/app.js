var express = require('express');
var bodyParser =require('body-parser');
var mongoose = require('mongoose');

const app   = express();
const port  = 3000;
const timeStamp = new Date();
//connect to mongoose

mongoose.connect('mongodb://localhost:27017/wishlistDB'
,{
    useMongoClient:true
});
const db   = mongoose.connection;

const Users = require('./models/users');

app.get('/', (req, res) => {
        res.send(`Please use the API parameter to access the webservice`);
    })
    .get('/ok', (req, res) => res.send(`/ok`))
    .get('/api/users', (req, res) => {
        Users.getUsers((error, Users)=>{
            if(error) {
                throw error;
            }
            res.json(Users);
            console.log(JSON.stringify(Users));
        });
    })
    .listen(port); // port 3000 to listen to

console.log(`${timeStamp}:Running server on port ${port}`);