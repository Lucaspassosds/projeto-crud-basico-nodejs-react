const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// cria a aplicacao express
const app = express();

//o CORS permite que requisicoes possam acessar hosts remotos
app.use(cors());

// analisa requisicoes de content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// analisa requisicoes content-type - application/json
app.use(bodyParser.json());

// Configurando a base de dados
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conectando a base de dados
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado ao banco de dados com sucesso");    
}).catch(err => {
    console.log('Nao foi possivel conectar ao banco dados. Saindo...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.json({"message": "Bem vindo à aplicação servidor!"});
});

require('./app/routes/pessoa.routes.js')(app);
require('./app/routes/curso.routes.js')(app);

// listen para requisicoes
app.listen(3001, () => {
    console.log("Servidor ativado na porta 3001");
});