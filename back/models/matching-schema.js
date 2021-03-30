const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let matchingSchema = new Schema({

    codePlu: {
        type: String
    },
    codeMin: {
        type: String
    }
}, {
    collection: 'matchingCodesMinPlu'
})

module.exports = mongoose.model('matchingCodesMinPlu', matchingSchema)