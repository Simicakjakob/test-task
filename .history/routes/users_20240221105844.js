const express = require('express');
const router = express.Router(); 
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const User = require('../models/user');
const uporabnik = require('./uporabnik')


router.post('/register', (req, res, next) => {
    let newUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven
    });

    User.addUser(newUser, (err,user) => {
        if(err){
             res.json({success: false, msg: 'Failed to register user'})
        }
         else{
            res.json({success: true, msg: 'User registered'})
         }  
        
    })
});
router.post('/update', (req, res, next) => {
    let newUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven
    });

    User.editUser(newUser, (err,user) => {
        if(err){
             res.json({success: false, msg: 'Failed to register user'})
        }
         else{
            res.json({success: true, msg: 'User registered'})
         }  
        
    })
});
