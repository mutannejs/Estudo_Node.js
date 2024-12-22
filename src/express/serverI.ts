import express from 'express';
import { config } from 'dotenv';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';

import * as myuser from '../poo/json/user.json';

export default function serverI() {
    config();
    const apiUrl = 'http://localhost';
    const apiPort = 3001;

    const app = express();

    const pathPagesFolder = join( process.cwd(), 'public' );
    const pathFile = join( process.cwd(), 'files', 'basic_user.json' );

    app.use( express.static(pathPagesFolder) );

    app.get('/', (_, res) => {
        res.send('O server subiu com sucesso!\nTente acessar a rota /rotas.html');
    });

    app.get('/files/basic_user.json', (_, res) => {
        const basicUserFile = readFileSync( pathFile );
        res.send(basicUserFile);
    });

    app.get('/users/mutannejs', (_, res) => {
        res.send(myuser);
    });

    app.listen(apiPort, () => {
        console.log(`Servidor rodando no endereço ${apiUrl}:${apiPort}`);
    });
}