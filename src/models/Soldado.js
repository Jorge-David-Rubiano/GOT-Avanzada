const mongoose = require('mongoose');
const {Schema} = mongoose;

const SoldadoSchema = new Schema({
    nombre:{type: String, required: true },
    especialidad:{type: String, required: true},
    cargo:{type: String, required: true},
    asesinatos:{type: String, required: true},
    interes:{type: String, required: true}
    
});

module.exports = mongoose.model('Soldado', SoldadoSchema);