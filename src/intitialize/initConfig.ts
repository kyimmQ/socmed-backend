import dotenv from "dotenv";

dotenv.config({});

export class Config {
  public DATABASE_URL: string;

  constructor() {
    this.DATABASE_URL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_INITDB_HOST}:${process.env.MONGO_INITDB_PORT}/${process.env.MONGO_INITDB_DATABASE}?authSource=admin`;
  }
}
