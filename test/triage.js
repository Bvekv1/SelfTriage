var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);
const request = require('supertest');
const { assert, use } = require('chai');

var server = require('../index.js');
const { response } = require('express');

describe('Register',function(){

	describe('POST user registration in test',function(){

		it('the user should be registered, unique email and password is provided',function(done){
		chai.request(server)
			.post('/api/v1/registerUser')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                fullName:'jasmine',
                email:'jasmine@gmail.com',
                password:'bibek',
                
                })
			.end(function(err,res){

				res.body.should.have.status('200')
				done();
			})
		})
	})
})

describe('Login',function(){

	describe(' user login  test',function(){

		it('the user should be login, unique email and password is provided',function(done){

		chai.request(server)
			.post('/api/v1/loginUser')
			.set('content-type','application/json')
			.send({
                email:'Choco@gmail.com',
				password:'bibek'
			})
			.end(function(err,res){
                 
				res.body.should.have.status('200')
				done();
			})
		})
	})
})

describe('Symptom',function(){

	describe('POST Symptom data',function(){

		it('the symptom should be added',function(done){
		chai.request(server)
			.post('/api/v1/add')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
            cough: 'yes',
            temprature:'yes',
            fatigue: 'yes',
            shortnessofbreathe: 'yes',
            bodyPain: 'yes',
            diarrhoea: 'yes',
            runnyNose: 'yes',
            nausea: 'yes',
            tasteLoss: 'yes'
                
                })
			.end(function(err,res){

				res.body.should.have.status('200')
				done();
			})
		})
	})
})

/** 
 * Test the symptom by gets routes
 */
describe("GET /api/v1/check/:", () => {
    it("It should retrive symptom details", (done) => {
		const cough = yes;
		const temprature = yes;
		const fatigue = yes;
		const shortnessofbreathe = yes;
		const bodyPain = yes;
		const diarrhoea = yes;
		const runnyNose = yes;
		const nausea = yes;
		const tasteLoss =yes;
		
        request(server)                
            .get('/api/v1/check/:cough/:temprature/:fatigue/:shortnessofbreathe/:bodyPain/:diarrhoea/:runnyNose/:nausea/:tasteLoss' )
            .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
            .end((err, response) => {
                response.should.have.status(200);
             //  response.body.should.be.a('array');
                done();
            });
    });
  });