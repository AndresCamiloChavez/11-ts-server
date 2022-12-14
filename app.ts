import dotenv from "dotenv";
import {Server} from "./models/server"
dotenv.config(); // para que lea las variables de entorno

const server = new Server();
server.listen();