const User = require('../model/user')
const bcrypt = require('bcryptjs');
function register(req,res,next){
    let password = req.body.password;
   bcrypt.hash(password,12,function(err,hash){
       if(err){
           let err = new Error('hash failed');
           err.status = 500;
           return next(err);
       }
       User.user.create({
           fullName: req.body.fullName,
           email:req.body.email,
           password: hash,
           imageName: req.body.imageName
       }).then((user)=>{
           res.json({
               status: "200",
               message: "Congrats!! sucessfully registered"
           });
        }).catch(next);
       });
      
}
module.exports = {
    register
}