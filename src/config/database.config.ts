import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  uri: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_DATABASE}`,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
