var  mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        match: /[a-z]/,
        required: true
     }
    // ,
    // email: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String
    // },
    // profile_url: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // friends: [{
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     profile_url: {
    //         type: String,
    //         required: true
    //     }
    // }]

});

var  Users = module.exports = mongoose.model('Users', userSchema,'Users' );

//user getter
module.exports.getUsers = (callback, limit) => {
    Users.find(callback).limit(limit);    
};