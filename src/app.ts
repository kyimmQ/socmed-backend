import express, { Express } from "express";
import { Server } from "./intitialize/initServer";
import initMongo from "./intitialize/initMongo";

class App {
  public initialize(): void {
    initMongo();
    const app: Express = express();
    const server: Server = new Server(app);
    server.start();
  }
}

const appInstance: App = new App();
appInstance.initialize();
