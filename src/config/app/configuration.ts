import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
  dbHost: process.env.DB_HOST,
  dbDatabase: process.env.DB_DATABASE,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
}));
