const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({

    promo: {
        type: String
    },
    prix: {
        type: Number,
        required: true
    },
    origine: {
        type: String,
    },
    cat: {
        type: String
    },
    cal: {
        type: String
    },
    cond: {
        type: String
    },
    date: {
        type: String
    },
    codeMag: {
        type: String
    },
    codePluPlus: {
        type: String
    },
    codePlu: {
        type: String
    },
    entite: {
        type: String
    },
    adresse: {
        type: String
    },
    ville: {
        type: String
    },
    codePostal: {
        type: String
    },
    logo: {
        type: String,
        image: Buffer
    },
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)