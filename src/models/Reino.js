const mongoose = require('mongoose');
const {Schema} = mongoose;

const ReinoSchema = new Schema({
    nombre:{type: String, required: true },
    capital:{type: String, required: true},
    region:{type: String, required: true},
    lugar:{type: String, required: true},
    ciudad:{type: String, required: true},
    regionA:{type: String, required: true},
    lugarA:{type: String, required: true},
    ciudadA:{type: String, required: true}
});

module.exports = mongoose.model('Reino', ReinoSchema);