//importando o express
const express = require('express');
//importando usercontroller
const UserController = require('./controllers/UserController');

class App {
    start() {
        this.setupExpress();
        //método que vai carregar todos os controllers da aplicação
        this.loadControllers();
        this.startServer();
    }
    setupExpress() {
        //criando instancia do express na aplicação
        this.express = express();
        //definindo middleware para imprimir cada requisição nova
        //utilizando o método use(), ele é como um interceptador
        //entre a requisição e a resposta do usuário
        this.express.use((req, res, next) => {
            // exibir método http e url que o usuário chamou
            console.log(req.method, req.url)
            //chamar método next para continuar rodando a aplicação
            next();
        });
    }

    //carrega toda a lista de controllers que a aplicação terá
    loadControllers() {
        this.controllers = [
            new UserController(this.express)
        ]
    }

    //método que vai iniciar o servidor
    startServer(){
        const port = 3001;
        this.express.listen(port, () => {
            console.log(`API executando na porta: ${port} `);
        })
    }
}

module.exports = App;