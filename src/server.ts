import * as http from 'http';

interface IBODY {
    name: string
}

const sports = ["soccer", "tennis", "basketball", "handball"];
let counter = 1;

export function server(port: number) {

    const server = http.createServer(async (req, res) => {
        const { url, method } = req;

        const bodyPromise = new Promise<IBODY>((resolve, reject) => {
            let body: IBODY;
    
            req.on('data', data => {
                body = JSON.parse(data);
            })

            req.on('end', () => {
                resolve(body);
            })
        })

        if (url == '/') {
            res.write('Hello Node.JS!', (error) => {
                if (error) {
                    console.error("Erro ao receber requisição para a rota '/': " + error.message);
                }
                console.log(`${counter++} requisições recebidas na rota '/'`);
            });
            res.end();
            return;
        }

        if (url == '/api/sports') {
            if (method == 'GET') {
                res.write(JSON.stringify(sports));
            } else if (method == 'POST') {
                let {name: nameSport} = await bodyPromise;

                if (!nameSport) {
                    res.write('Falha ao tentar criar novo esporte.');
                } else {
                    if (!sports
                            .map(s => s.toLocaleLowerCase())
                            .includes(nameSport.toLocaleLowerCase())
                    ) {
                        sports.push(nameSport);
                        res.write('Adicionado com sucesso!');
                    }
                }
            }
            res.end();
            return;
        }

        res.statusCode = 404;
        res.write(`
            <head>
                <meta charset="utf-8" />
            </head>
            <h1>
                404 - página não encontrada
            </h1>`);
        res.end();
    });

    server.listen(port, 'localhost', () => {
        console.log(`Servidor rodando no endereço: http://localhost:${port}`);
    })
}