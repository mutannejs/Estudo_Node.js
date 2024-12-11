import * as http from 'http';

let counter = 1;

export function server(port: number) {

    const server = http.createServer((req, res) => {
        const { url, method } = req;

        if (url == '/') {
            res.write('Hello Node.JS!', (error) => {
                if (error){
                    console.error("Erro ao receber requisição para a rota '/': " + error.message);
                }
                console.log(`${counter++} requisições recebidas na rota '/'`);
            });
            res.end();
        }
    });

    server.listen(port, 'localhost', () => {
        console.log(`Servidor rodando no endereço: http://localhost:${port}`);
    })
}