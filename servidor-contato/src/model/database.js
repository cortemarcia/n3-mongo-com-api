const mongoose = require("mongoose")
const DB_URL= "mongodb://localhost:27017/reprograma" //link do mongo


const connect= () =>{
    mongoose.connect (DB_URL,{useNewUrlParser:true})// entender o que useNewParser
    const connection= mongoose.connection // Entender oq ue esse . connection
    connection.on ("error", () =>
    console.error("Erro ao conectar no mongo"))

    connection.once("open", () => console.log("Conectamos como MOngo"))
}

module.exports= {connect}