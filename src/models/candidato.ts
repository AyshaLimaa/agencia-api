import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Usuario } from './usuario'

export enum Genero {
  MAS = 'masculino',
  FEM = 'feminino',
  OUT = 'outros'
}

@Entity('candidato')
export class Candidato {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    nomeCompleto: string

  @Column({ unique: true })
    cpf: string

  @Column({ unique: true })
    whatsapp: string

  @Column({ enum: Genero, default: Genero.OUT })
    sexo: string

  @Column()
    dataNascimento: Date

  @ManyToOne((type) => Usuario)
  @JoinColumn({ name: 'id_usuario' })

    usuario: Usuario
}
