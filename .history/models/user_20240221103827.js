const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    ime:  {
        type: String
    },
    priimek: {
        type: String,
        required: true
    },
    datum_rojstva: {
        type: String,
        required: true
    },
    aktiven: {
        type: Boolean,
        required: true

    }

});

const User = module.exports = mongoose.model('User', UserSchema);