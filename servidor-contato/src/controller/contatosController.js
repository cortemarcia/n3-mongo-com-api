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
      return response.status(200).send(contatos)
    }
  })

}



module.exports = {
  getAll,
  add,
  getByName
}