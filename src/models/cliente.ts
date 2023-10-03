import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    nome: string

  @Column({ unique: true })
    email: string

  @Column({ unique: true })
    WhatsApp: string

  @Column({ unique: true })
    nomeResponsavel: string
}
