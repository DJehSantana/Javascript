//controller responsavel por manipular as requisições relacionadas ao usuário
const BaseController = require('./BaseController');

//criando classe UserController como filha da Classe BaseController
class UserController extends BaseController{
    //implementando método setupRoutes
    setupRoutes(basePath) {
        this.express.get(`${basePath}/usuario`, (req, res) => {
            //repassando os parâmetros para o método GET
            this.get(req, res)
        });
    }
    //criando metodo get
    get (req, res){
        return res.json({
            nome: 'Jéssica',
            id: 1
        })
    }
}

module.exports = UserController;