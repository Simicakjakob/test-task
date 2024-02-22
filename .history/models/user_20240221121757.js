const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    ime:  {
        type: String

    },
    priimek: {
        type: String,
        required:true
        
    },
    datum_rojstva: {
        type: String,
        required:true
    },
    aktiven: {
        type: Boolean,
        required:true
    },
    opis: {
        type: String,
        required:true
    }


});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id) {
    console.log("id: " +id)
    return User.findById(id).exec();
}

module.exports.addUser = function (newUser,callback){
    return newUser.save();
};
module.exports.editUser = function(user_id,updated_user,callback){
    User.findOneAndUpdate({_id:user_id},updated_user,{new: true});
}