const express = require('express');
const cors = require ('cors');
var morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

const userController = require('./controllers/userController');

app.post('/registerUser',userController.register);
app.get('/loginUser',userController.Login);

app.listen('3000');
console.log('server started');

module.exports =app;