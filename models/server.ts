import express, { Application } from "express";
import routerUsuarios from "../routes/usuario";
import db from "../db/connection";
import cors from "cors";
export class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    usuarios: '/api/v1/usuarios'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? '8000';
    
    this.dbConection();
    this.middlewares(); //los middlewares tiene que ir antes de las rutas
    this.routes();
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`LOG corriendo en ${ this.port }`);
    })
  }
  middlewares(){
    this.app.use(cors());
    this.app.use(express.json()); //parse del body ----- enviar y recibir
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.use(this.apiPath.usuarios, routerUsuarios);
  }
  async dbConection(){
    try {
      await db.authenticate();
      console.log(`LOG Base de datos online!! `);
    } catch (error) {
      throw new Error(error+'')
      
    }

  }
}
