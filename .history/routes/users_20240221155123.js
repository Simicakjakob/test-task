const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');



router.post('/register', async (req, res, next) => {
    let newUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven,
        opis: req.body.opis
    });

   
    try{
        console.log(newUser);
        await newUser.save();
        res.send(200);
            
    }
    catch(err){
        res.send(err.message);
            
    }

   
    
    console.log("konec");
});
router.put('/update/:userid', (req, res, next) => {
    let updUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven,
        opis: req.body.opis
    });
    try{
        User.findOneAndUpdate({_id:user_id},updUser);
        res.send(200);
    }
    catch(err)
    {
        res.send(err.message);
    }
    

});

router.get('/profile/:userid', async (req, res, next) => {
    console.log(req.params.userid);
    var rezultat = await User.findById(req.params.userid).exec();
    res.send(rezultat);

});


module.exports = router;