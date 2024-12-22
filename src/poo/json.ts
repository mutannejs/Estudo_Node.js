import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import * as myuser from './json/user.json';

export default function json() {
    for (let p in myuser) {
        console.log(`${p}:`, myuser[(p as keyof IUser)]);
    }

    const basicMyuser: Partial<Pick<IUser, "id" | "login" | "url" | "name" | "avatar_url">> = {
        id: myuser.id,
        login: myuser.login,
        name: myuser.name,
        avatar_url: myuser.avatar_url,
        url: myuser.url
    }

    const pathNewFileJson = join( process.cwd(), 'files', 'basic_user.json');
    writeFileSync(pathNewFileJson, JSON.stringify(basicMyuser, null, 2));
}