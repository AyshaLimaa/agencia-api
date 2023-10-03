import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/agenciado.sqlite',
  synchronize: true,
  entities: ['src/models/**.{ts,js}'],
  subscribers: [],
  migrations: []
})
