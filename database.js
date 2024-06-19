/**
 * Módulo de conexão com o banco de dados
 * uso do framework mongoose (npm i mongoose)
*/

// importar a blibioteca
const mongoose = require('mongoose')

// definir o banco de dados (copiar a string do compass)

let url = "mongodb://admin:pti%402018@10.26.45.209:27017/?authSource=admin"

// método para conectar
const conectar = async () => {
    try {
        await mongoose.connect(url)
        console.log("MongoDB conectado")
    } catch (error) {
        console.log(`Problema detectado: ${error.message}`)
    }
}

// desconectar
const desconectar = async () => {
    try {
        await mongoose.disconnect(url)
        console.log("MongoDB desconectado")
    } catch (error) {
        console.log(`Problema detectado: ${error.message}`)
    }
}

// exportar os métodos conectar e desconectar para o main.js
module.exports = { conectar, desconectar }