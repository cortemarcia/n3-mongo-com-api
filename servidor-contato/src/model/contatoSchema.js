const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Criar um Schema para estabelecer infos que devem constar na nova collection
const ContatoSchema = new Schema({
    _id : {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
    type: String,
    unique: true
},
    celular: {
    type: String,
    unique: true
}
})



const contatosCollection = mongoose.model('contato',ContatoSchema)// Criando variavel para utilizar mmodelo estabelecido do Schema

module.exports = contatosCollection