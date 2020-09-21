var db = require('../database/dbConfig')

var covid = db.sequelize.define('covid', {
//attributes
id: {
	type:db.Sequelize.INTEGER ,
	primaryKey: true,
	autoIncrement:true,
	allowNull:false
},
 cough:{
   type:db.Sequelize.TEXT,
   allowNull:false
 },
 temprature: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
 fatigue: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
shortnessofbreathe:{
	type:db.Sequelize.TEXT ,
	allowNull:false
},
bodyPain:{
	type:db.Sequelize.TEXT ,
	allowNull:false
},
diarrhoea:{
	type:db.Sequelize.TEXT,
	allowNull:false
},
runnyNose:{
	type:db.Sequelize.TEXT,
	allowNull:false
},
nausea:{
	type:db.Sequelize.TEXT,
	allowNull:false
},
tasteLoss:{
	type:db.Sequelize.TEXT,
	allowNull:false
}
},
{

freezeTableName: true,
tableName:'covidTable',
paranoid:true

}
)

 covid.sync({force:false})
 .then(function(){

 })
 .catch(function(err){

console.log(err)

 })

module.exports = {
	db,
	covid};