var db = require('../database/dbConfig')

var user = db.sequelize.define('user', {
//attributes
id: {
	type:db.Sequelize.INTEGER ,
	primaryKey: true,
	autoIncrement:true,
	allowNull:false
},
fullName: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
email: {
	type:db.Sequelize.TEXT ,
	allowNull:false
},
password:{
	type:db.Sequelize.TEXT ,
	allowNull:false
},
imageName:{
	type:db.Sequelize.TEXT ,
	allowNull:true
},
},
{

freezeTableName: true,
tableName:'userTable',
paranoid:true

}
)

 user.sync({force:false})
 .then(function(){

 })
 .catch(function(err){

console.log(err)

 })

module.exports = {
	db,
	user};