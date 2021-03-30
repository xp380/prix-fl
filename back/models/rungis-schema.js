const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rungisSchema = new Schema({

    date_lib: {
        type: String,
        
    },
    code_libelle: {
        type: String
    },
    libelle: {
        type: String
    },
    prix_mini: {
        type: Number
    },
    prix_maxi: {
        type: Number
    },
    prix_moyen: {
        type: Number
    },
    unite_prix: {
        type: String
    }
}, {
    collection: 'prixMinRungis'
})

module.exports = mongoose.model('prixMinRungis', rungisSchema)