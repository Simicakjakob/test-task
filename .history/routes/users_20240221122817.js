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

    User.addUser(newUser, (err) => {
        if(err){
             res.json({success: false, msg: 'Failed to register user'})
        }
         else{
            res.json({success: true, msg: 'User registered'})
         }  
        
    })
});
router.patch('/update', (req, res, next) => {
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

router.get('/profile',(req,res,next)=>{
    res.json({user:req.user});
})
module.exports = router;