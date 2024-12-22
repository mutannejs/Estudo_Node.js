import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import { userRouter } from './routes/users';

export default function serverII() {
    config();

    const apiPort = process.env.API_PORT;
    const apiUrl = process.env.API_URL;

    const server = express();

    server.use( express.json() );
    server.use( cors() );
    server.use( userRouter );

    server.listen( apiPort, () => {
        console.log(`Server rodando no endereço ${apiUrl}:${apiPort}`);
    });
}