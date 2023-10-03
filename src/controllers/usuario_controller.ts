import { type Request, type Response } from 'express'
import { AddUsuarioService } from '../services/usuarios/add_usuario_services'

export class UsuarioController {
  async adicionarUsuario (request: Request, response: Response): Promise<Response> {
    const addUsuariosServices = new AddUsuarioService()
    const { apelido, email, senha } = request.body
    const usuario = await addUsuariosServices.add(apelido, email, senha)
    return response.json(usuario)
  }

  async listarUsuario (request: Request, response: Response): Promise<Response> {
    return response.json({})
  }
}
