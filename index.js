const express = require('express');
const cors = require ('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
const userController = require('./controllers/userController');
const symptomChecker = require('./controllers/symptomChecker');

app.post('/api/v1/registerUser',userController.register);
app.post('/api/v1/loginUser',userController.Login);
app.post('/api/v1/add',symptomChecker.triage);
app.get('/api/v1/check/:cough/:temprature/:fatigue/:shortnessofbreathe/:bodyPain/:diarrhoea/:runnyNose/:nausea/:tasteLoss', symptomChecker.check);

app.listen('3000');
console.log('server started');

module.exports =app;