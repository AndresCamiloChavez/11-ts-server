"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("../routes/auth"));
class Server {
    constructor() {
        var _a;
        this.apiPath = {
            usuarios: '/api/v1/usuarios',
            auth: '/api/v1/auth',
        };
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '8000';
        this.dbConection();
        this.middlewares(); //los middlewares tiene que ir antes de las rutas
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`LOG corriendo en ${this.port}`);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //parse del body ----- enviar y recibir
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPath.usuarios, usuario_1.default);
        this.app.use(this.apiPath.auth, auth_1.default);
    }
    dbConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log(`LOG Base de datos online!! `);
            }
            catch (error) {
                throw new Error(error + '');
            }
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map