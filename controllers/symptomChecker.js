const Covid = require("../model/covid");

function triage(req,res,next){
    
       Covid.covid.create({
           cough: req.body.cough,
           temprature:req.body.temprature,
           fatigue: req.body.fatigue,
           shortnessofbreathe: req.body.shortnessofbreathe,
           bodyPain: req.body.bodyPain,
           diarrhoea: req.body.diarrhoea,
           runnyNose:req.body.runnyNose,
           nausea:req.body.nausea,
           tasteLoss:req.body.tasteLoss
       }).then((user)=>{
           res.json({
               status: "200",
               message: "Congrats!!data :relaxed:"
           });
        }).catch(next);
       
        
}
function check(req,res,next){
    Covid.covid.findAll({
        where:{
          cough:req.params.cough,
          temprature:  req.params.temprature,
          shortnessofbreathe:req.params.shortnessofbreathe,
          bodyPain:req.params.bodyPain,
          diarrhoea:req.params.diarrhoea,
          runnyNose:req.params.runnyNose,
          nausea:req.params.nausea,
          tasteLoss:req.params.tasteLoss
        }
    }).then(function (result){
        console.log(result);
        if(result === 0){
            res.json({
                status: '200',
                message: 'no data'
            })
        } else{
            res.json({result , message:'bibek'});
            
            
        }
    }).catch(function (err){
        next(err);
    })
}


 
module.exports = {
    triage,
    check
}