const app = require('express')();
const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://mateus:abc123456789@produto-uixzu.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true
    //useUnifiedTopology: true
}, () => {
    console.log("Banco de dados conectado");
})

app.listen(8080,() => {
  console.log("API rodando!");
})