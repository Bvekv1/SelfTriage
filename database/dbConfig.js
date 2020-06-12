var Sequelize = require('sequelize');
var sequelize = new Sequelize ('selfTriage','root','6295',{host: 'localhost',dialect: 'mysql',
logging:false});
sequelize.authenticate().then(
    function(){
        console.log('Database connected')
    }
)
.catch(
    function(err){
        console.log('asdkjhfdksj')
    }
)
module.exports = {
    Sequelize, sequelize
}