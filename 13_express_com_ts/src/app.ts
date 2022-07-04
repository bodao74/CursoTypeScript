// 1 - iniciando o projeto.

console.log('Testando !!!!!');

// 2 - init express

import express, { json, NextFunction, Request, Response } from 'express';

const app = express();

//3  - rota com post
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);

////// end - 11 ///////


app.get("", (req, res) => {
    return res.send("App Working ......... ")
});

app.post('/api/product', (req, res) => {
    console.log(req.body);
    return res.send('Produto adicionado! 222!!');
})

app.all("/api/product/check", (req, res) => {
    //req.method = VERBO do HTTP
    if (req.method === 'POST') {
        return res.send('Inseriu Registro.');
    } else if (req.method === 'GET') {
        return res.send('Leu algum registro.');
    } else {
        return res.send('Método não reconhecido.');
    }
});

// 5 - Interfaces
app.get('/api/interfaces', (req: Request, res: Response) => {
    return res.send('Utilizando Interfaces!');
});

// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "shirt",
        price: 30.00,
        color: "blue",
        sizes: ["P", "M", "G", "GG"],
    });
});

// 7 - Parametros de Rota (Route Parameters)
app.get('/api/product/:id', (req: Request, res: Response) => {
    console.log(req.params);
    const id = req.params.id;
    if (id === '1') {
        const product = {
            id: 1,
            name: 'Boné',
            price: 10.00
        };
        return res.json(product);
    } else {
        return res.send('Produto não encontrado.');
    }
});

// 8 - rotas complexas
app.get('/api/product/:productId/review/:reviewId', (req: Request, res: Response) => {
    console.log(req.params);
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
})

// 9 - router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com id ${req.params.id}`);
    return res.send('Usuário encontrado !');
}

app.get('/api/user/:id', getUser);


// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === '1') {
        console.log('Pode seguir!');
        next();

    } else {
        //const msg = { msg: 'Acesso Restrito !' };
        const msg = 'Acesso Restrito !';
        console.log(msg);
        //return res.json(msg);
        return res.send(msg);
    }
}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
    return res.json({ msg: 'seja bem vindo a área administrativa......' });
})

// 12 - Req e Res com Generics
app.get('/api/user/:id/details/:name', (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
) => {
    console.log(req.params.id);
    console.log(req.params.name);
    return res.json({ status: true });
});

/// end 12///////

// 13 - try catch (error handling)
app.get('/api/error', (req: Request, res: Response) => {
    try {
        throw new Error('Algo deu errado');
    } catch (error: any) {
        //res.statusCode=500;

        res.status(500).json({ msg: error.message });
    }
})



app.listen(3000, () => {
    console.log('Aplicação de TS + Express funcionando!')
});