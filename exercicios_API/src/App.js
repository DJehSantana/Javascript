//importando o express
const express = require('express');

class App {
    start() {
        this.setupExpress();
        this.startServer();
    }
    //criando instancia do express na aplicação
    setupExpress() {
        this.express = express()
    }

    //método que vai iniciar o servidor
    startServer(){
        const port = 3000;
        this.express.listen(port, () => {
            console.log(`API executando na porta: ${port} `);
        })
    }
}

module.exports = App;