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
require("dotenv/config");
const server_1 = __importDefault(require("./server"));
const connectDatabse_1 = __importDefault(require("./db/connectDatabse"));
// import User from './db/User';
const City_1 = __importDefault(require("./db/City"));
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connectDatabse_1.default)();
    // await User.create({ name: 'Daniel', email: 'test@test.com', password: '123456aA$' });
    yield City_1.default.create({
        name: 'Köln',
        topPlaces: [
            {
                name: 'Kölner Dom',
                description: "Gotik tarzda inşa edilmiş, Almanya'nın en büyük katedrali.",
            },
            {
                name: 'Rheinpark',
                description: 'Ren Nehri kıyısında geniş bir park alanı, dinlenmek için ideal.',
            },
            {
                name: 'Ludwig Müzesi',
                description: 'Modern sanat koleksiyonlarıyla ünlü müze.',
            },
        ],
    });
    (0, server_1.default)();
});
bootstrap();
