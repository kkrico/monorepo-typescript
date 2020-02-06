import express from 'express';
import HelloWorld from '@monorepo-typescript/common';

const PORT = 8081;
const app = express();

// Adicionamos uma rota de teste
app.get('/hello-world', (req: express.Request, res: express.Response) => {
    res.json({
        message: HelloWorld('Daniel'),
    });
});

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
