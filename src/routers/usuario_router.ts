import { UsuarioController } from './../controllers/usuario_controller'
import { type Router } from 'express'

const usuarioController = new UsuarioController()
export default (router: Router): void => {
  router.post('/usuarios/salvar', usuarioController.adicionarUsuario)
  router.get('/usuarios', usuarioController.listarUsuario)
}
