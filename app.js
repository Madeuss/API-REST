const app = require('express')();
const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://mateus:abc123456789@produto-uixzu.mongodb.net/test?retryWrites=true&w=majority";
const bodyParser = require("body-parser");

// Config Body Parser
  app.use(bodyParser.json());

// Configuração do MongoDB
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true
        //useUnifiedTopology: true
    }, () => {
        console.log("Banco de dados conectado");
    })
	// Carregando model de Produto
	require("./models/Produto");
	const Produto = mongoose.model("Produto");

// Endpoints

	// Cadastro
	app.post("/produto",(req, res) => {

		if(req.body.nome != undefined && req.body.fabricante != undefined && req.body.preco != undefined){
			var produto = new Produto({
				nome: req.body.nome, 
				fabricante: req.body.fabricante, 
				preco: req.body.preco
			});
			//Salvar esses dados no banco de dados
			//retornando uma promise
			produto.save().then(() => {
				// Dado salvo com sucesso
				res.statusCode = 201
				res.send();
			}).catch((erro) => {
				if(erro){
					throw erro;
				}
				// Ocorreu algum erro
				res.statusCode = 417
				res.send();
			})
		}else{
			res.statusCode = 406
			res.send("Not acceptable");
		}
	})


app.listen(8000,() => {
  console.log("API rodando!");
})