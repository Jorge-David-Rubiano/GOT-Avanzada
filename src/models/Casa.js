const mongoose = require('mongoose');
const {Schema} = mongoose;

const CasaSchema = new Schema({
    casa:{type: String, required: true },
    lema:{type: String, required: true},
    ubicacion:{type: String, required: true} 
});

module.exports = mongoose.model('House', CasaSchema);