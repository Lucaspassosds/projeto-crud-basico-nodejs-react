const Pessoa = require('../models/pessoa.model.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CursoSchema = mongoose.Schema({
    nome: String,
    pessoas: [ {type: mongoose.Schema.ObjectId, ref: 'Pessoa' } ]
});

module.exports = mongoose.model('Curso', CursoSchema);