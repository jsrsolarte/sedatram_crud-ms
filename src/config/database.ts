export default {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: parseInt(process.env.TYPEORM_PORT),
  entities: ['dist/**/**.entity.js'],
  synchronize: false,
  logging: false,
  migrations: ['/src/migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};
