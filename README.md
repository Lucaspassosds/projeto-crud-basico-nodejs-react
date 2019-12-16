# projeto-selpe
Projeto da prova técnica da Selpe

Back end feito com,
Linguagem:NodeJS
Framework:ExpressJS
Banco de dados:MongoDB
ORM: Mongoose.

É necessário ter o NodeJs instalado e o mongoDB para rodar a aplicação.
É necessário fazer uma requisição HTTP para o backend para criar as tabelas do tipo CURSO, que serão usadas no front-end.

Front end feito com,
Linguagem: Javascript
Framework: ReactJS.

Para iniciar a aplicação:
Primeiro inicie o back-end, indo no cmd no diretorio onde a aplicação está baixada e digitando:
cd back-end
cd node-prova-selpe
node server.js

O servidor será iniciado na porta 3001.

Depois inicie o front end, indo no cmd no diretorio onde a aplicação está baixada e digitando:
cd client
npm start

O cliente será iniciado automaticamente na porta 3000.

O cliente apresenta um CRUD para manipulação do banco de dados PESSOA.
Por enquanto, ainda não foi possível desenvolver a funcionalidade de manter os cursos de uma determinada pessoa durante sua Edição(Update).
De resto, o programa deverá estar funcionando normalmente.
