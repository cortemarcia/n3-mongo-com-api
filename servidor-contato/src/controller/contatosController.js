const model = require("../model/contatoSchema")

const getAll = (request, response) => {
  model.find((error, contatos) => {
    // CALLBACK-->
    if (error) {
      // if (error !== null && error !== undefined )
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
};

// POST-->
const add = (request, response) => {
  //novo objeto para nossa coleção
  const contatoDoBody = request.body
  const contato = new model(contatoDoBody)

  contato.save((error) => {
    // if (error !== null && error !== undefined )
    if (error) {
      return response.status(400).send(error)
    } else {
      return response.status(201).send(contato)
    }
  })
};

// Aprendendo a criar rota por nome:-->
const getByName = (request, response) => {
  const nomeParams = request.params.nome
  // UTILIZANDO regex no params.nome
  const regex = new RegExp(nomeParams, "i")
  const filtro = { nome: regex }

  // CALL BACK-->
  model.find(filtro, (error, contatos) => {
    if (error) {
      return response.status(500).send(error)
    } else {
      if(contatos.length > 0){
        return response.status(200).send(contatos)
      }else{
        return response.status(404).send("Nome não encontrado")
          
      }
      
    }
  })

};


// Fazer a rota /contatos/id/:id buscando o id no mongo utilizando um metodo diferente de .find()

const getById= (request, response)=>{
  const Id = request.params.id

  model.findById(Id, (error, contato) => {
    if (error) {
      return response.status(500).send(error)
    } else {
      if (contato){
        return response.status(200).send(contato)
      }else{
        return response. status(404).send("Contato não encontrado")
      }
      
    }
  })
};

const deletar = (request, response) =>{
  const nomeParams = request.params.nome

  model.findOneAndDelete(nomeParams, (error) => {
    if (error) {
      return response.status(500).send(error)
    } else {      
        return response.status(200).send("Apagou")      
          
      }
      
  })

};


module.exports = {
  getAll,
  add,
  getByName,
  getById,
  deletar
}