const mongoose = require('mongoose');
const config = require('../config/database');
const express = require('express');

const UserSchema = mongoose.Schema({
    ime:  {
        type: String

    },
    priimek: {
        type: String,
   
        
    },
    datum_rojstva: {
        type: String,
      
    },
    aktiven: {
        type: Boolean,
       
    },
    opis: {
        type: String,
       
    }


});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = async function (id) {
    console.log("id: " +id)
    var rezultat = await User.findById(id).exec();
    return rezultat;
}

module.exports.addUser = function (newUser,callback){
     try{
        console.log(newUser);
        newUser.save();
        return console.log("ok");
        
    }
    catch(err){
        console.log(err.message);
        return err.message;
    }
        

};
module.exports.editUser = function(user_id,updated_user,callback){
    User.findOneAndUpdate({_id:user_id},updated_user,{new: true});
}