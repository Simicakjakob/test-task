const express = require('express');
const router = express.Router(); 
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');



router.post('/register', (req, res, next) => {
    let newUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven,
        opis:req.body.opis
    });

    User.addUser(newUser, (err,user) => {
        if(err){
             console.log("!!!!!!ne dela");
             res.json({success: false, msg: 'Failed to register user'})
        }
         else{
            console.log("dela");
            res.json({success: true, msg: 'User registered'})
         }  
        
    })
});
router.put('/update', (req, res, next) => {
    let newUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven,
        opis:req.body.opis
    });

    User.editUser(newUser, (err,user) => {
        if(err){
             res.json({success: false, msg: 'Failed to update user'})
        }
         else{
            res.json({success: true, msg: 'User updated'})
         }  
        
    })
});

router.get('/profile/:userid',async (req,res,next)=>{
    console.log(req.params.userid);
    rezultat= await User.getUserById(req.params.userid);  
    res.send(rezultat);

});

    
module.exports = router;