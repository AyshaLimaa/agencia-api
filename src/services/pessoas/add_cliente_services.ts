import { AppDataSource } from '../config/data_source'
import { Cliente } from '../models/cliente'

export class AddclienteService {
  async add (nome: string, email: string, whatsApp: string, nomeResponsavel: string): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Cliente)
    await pessoaRepository.save({ nome, email, whatsApp, nomeResponsavel })
  }
}
