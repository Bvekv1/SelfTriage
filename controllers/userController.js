const User = require('../model/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
function Login(req, res, next) {
    User.user.findOne({
        where: { email: req.body.email }
    }).then(function (result) {
        if (result === null) {
            res.status(404);
            res.json({
                message: "Register First"
            })
        }
        else {
            req.id = result.dataValues.id;
            bcrypt.compare(req.body.password, result.dataValues.password)
                .then(function (isMatch) {
                    if (!isMatch) {
                        let err = new Error('Email id or password doesn`t match');
                        err.status = 404;
                        return next(err);
                    }
                    else {
                        console.log(req.id);
                        var payLoad = {
                            id: req.id
                        }
                        jwt.sign(payLoad, 'thisisSecretKey', function (err, resultToken) {
                            console.log(err)
                            console.log(payLoad);
                            //    res.status(200);
                            res.json({ 
                                status: "200",
                                token: resultToken
                        })
                        })
                    }
                })
        }
    })
}

module.exports = {
    register,
    Login
}