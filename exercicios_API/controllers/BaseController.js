//classe base para que todo controller herde comportamentos e padrões
class BaseController{
    //receber instancia do express    
    constructor(expressInstance) {
        if (!expressInstance) {
            //validação da instancia do express
            throw new Error ('A instancia do express é obrigatória')
        }
        //atribuindo a instanca do express a um elemento da classe
        this.express = expressInstance;
        this.setupRoutes();

    }


}