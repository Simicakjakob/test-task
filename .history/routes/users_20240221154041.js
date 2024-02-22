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
        opis: req.body.opis
    });

    User.addUser(newUser => {
        try{
            console.log(newUser);
            newUser.save();
            res.send(200);
            
        }
        catch(err){
            res.send(err.message);  
        }

   
    })
    console.log("konec");
});
router.put('/update', (req, res, next) => {
    let newUser = new User({
        ime: req.body.ime,
        priimek: req.body.priimek,
        datum_rojstva: req.body.datum_rojstva,
        aktiven: req.body.aktiven,
        opis: req.body.opis
    });

    User.editUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to update user' })
        }
        else {
            res.json({ success: true, msg: 'User updated' })
        }

    })
});

router.get('/profile/:userid', async (req, res, next) => {
    console.log(req.params.userid);
    var rezultat = await User.findById(req.params.userid).exec();
    res.send(rezultat);

});


module.exports = router;