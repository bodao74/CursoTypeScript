//Variaveis de ambiente
require('dotenv').config();

import express from 'express';
import config from 'config';
import router from './router';
//DB
import db from '../config/db';

// Logger
import Logger from '../config/logger';

//Middlewares
import morganMiddleware from './middleware/morganMiddleware';

//inicialização do express
//porta do app
const port = config.get<number>("port"); //o number é opcional e usado para tipar o dado do arquivo de configuração.

const app = express(); //criação da aplicação

//inicialização do express
app.use(express.json());

app.use(morganMiddleware);

// Routes
app.use('/api/', router);

//inicialização do express
app.listen(port, async () => {
    await db();
    Logger.info(`Aplicação está rodando na porta ${port}`);
})