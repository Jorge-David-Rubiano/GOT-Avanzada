const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
nombre:{ type: String, required: true},
n_hijos:{ type: String, required: true},
nombre_hijos:{ type: String, required: true},
problema:{ type: String, required: true},
date: {type: Date, default: Date.now} 
});
module.exports = mongoose.model('Note', NoteSchema);