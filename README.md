# projeto crud com MERN stack

Back end feito com,
Linguagem:NodeJS
Framework:ExpressJS
Banco de dados:MongoDB
ORM: Mongoose.

É necessário ter o NodeJs instalado e o mongoDB para rodar a aplicação.
É necessário fazer uma requisição HTTP(indicavel usar o Postman) para o backend para criar as tabelas do tipo CURSO, que serão usadas no front-end.
 Após iniciar o back-end(explicação abaixo), digite a url da API no seu Postman (localhost:3001) e faça uma requisição do tipo POST, com o seguinte corpo:
  {
      "nome":"norme-do-curso-que-voce-quiser"
  } 
Repita esse processo para a quantidade de cursos que você desejar.

Front end feito com,
Linguagem: Javascript
Framework: ReactJS.

Para iniciar a aplicação:
Primeiro inicie o back-end, abrindo o cmd no diretorio onde a aplicação está baixada e digitando:
1.cd back-end
2.cd node-prova-selpe
3.node server.js

O servidor será iniciado na porta 3001.

Depois inicie o front end, abrindo o cmd no diretorio onde a aplicação está baixada e digitando:
1.cd client
2.(apenas na primeira vez que for rodar a aplicação) npm install ou yarn(se tiver o yarn) 
3.npm start

O cliente será iniciado automaticamente na porta 3000.

O cliente apresenta um CRUD para manipulação do banco de dados PESSOA, onde é possível definir seu nome, telefone, cpf e os cursos que ela está matriculada.
