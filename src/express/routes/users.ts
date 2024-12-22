import { Router } from 'express';

import { randomUUID } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { TUser } from './TUser';

class UsersDB {
    private _users: TUser[];
    private pathBD: string;
    
    constructor() {
        this.pathBD = join(process.cwd(), 'db.json');

        const db = readFileSync( this.pathBD, { encoding: 'utf-8' } );
        if (!db) {
            this._users = this.initBD();
            return;
        }

        const dbObject = JSON.parse( db ) as {
            _users: TUser[]
        };
    
        if (!dbObject._users || dbObject._users.length === 0) {
            this._users = this.initBD();
            return;
        }

        this._users = dbObject._users;
    }

    private writeUsers(users: TUser[]) {
        writeFileSync(this.pathBD, JSON.stringify({
            users
        }));
    }

    private initBD() {
        const users = [
            {
                id: randomUUID(),
                name: 'Ana',
                age: 15,
            },
            {
                id: randomUUID(),
                name: 'Bruno',
                age: 20,
            },
        ];
        this.writeUsers(users);
        return users;
    }

    get users() {
        return this._users;
    }

    set users(users: TUser[]) {
        this._users = users;
    }

    createUser(user: Omit<TUser, "id">) {
        const id = randomUUID();
    
        this._users.push({
            id,
            ...user
        });
    
        this.writeUsers(this._users);
        return id;
    }
}

function routes(users: UsersDB) {
    const userRouter = Router();

    userRouter.get('/api/users',
        (_, res) => {
            res.send(users.users);
        });

    userRouter.post('/api/users',
        (req, res) => {
            const body: Omit<TUser, "id"> = req.body;

            try {
                if ( !body || !body.name || body.age === null || body.age === undefined ) {
                    res
                        .status(400)
                        .send('Deve-se passar um nome e uma idade.');
                    return;
                }

                if ( body.age < 0 || !Number.isInteger(body.age) ) {
                    res
                        .status(400)
                        .send('A idade deve ser um número inteiro positivo')
                    return;
                }

                const id = usersDB.createUser(body);
                res.status(201).json(id);
            } catch (err) {
                console.log('Erro ao tentar criar um usuário!');
                console.error(err);
                res
                    .status(500)
                    .send('Ocorreu um erro ao tentar criar o usuário!');
                return;
            }
        });

    userRouter.delete('/api/users/:id',
        (req, res) => {
            const id = req.params.id;

            try {
                if (!id) {
                    res
                        .status(400)
                        .send('Deve ser informado um id');
                    return;
                }
                
                const newUsers = users.users.filter(
                    (u) => u.id != id
                );

                if (newUsers.length === users.users.length) {
                    res
                        .status(400)
                        .send('Não foi encontrado nenhum usuário com o id informado');
                    return;
                }

                users.users = newUsers;
                res.status(204).send();
                return;
            } catch (err) {
                console.log('Erro ao tentar remover um usuário!');
                console.error(err);
                res
                    .status(500)
                    .send('Ocorreu um erro ao tentar remover o usuário!');
                return;
            }
        }
    )

    return userRouter;
}

const usersDB = new UsersDB();
const userRouter = routes(usersDB);

export { userRouter };