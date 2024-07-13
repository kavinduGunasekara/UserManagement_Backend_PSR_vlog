const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose= require('mongoose'); 
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://admin:12345@cluster0.nj7nhk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connect = async()=> {
    try {
        await mongoose.connect(uri);
        console.log('Connected to Mongoose');

    }catch(error){
        console.log('Error connecting to Mongoose' , error);

    }
};
connect();

const server = app.listen(port, host , () => {
    console.log(`Node server listening to ${server.address().port}`);
});

app.use('/api', router);