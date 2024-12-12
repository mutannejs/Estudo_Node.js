import * as dotenv from 'dotenv';
import promptRl from "./node/prompt";
import exec_file from "./node/file";
import exec_dns from "./node/dns";
import server from "./node/server";
import exec_querystring from "./node/querystring";
import exec_crypto from './node/crypto';
import exec_luxon from './extern/luxon';
import for_in_for_of from './javascript/for_in_for_of';
import classes from './javascript/classes';

dotenv.config();

async function whatToExecute() {   
    const prompt = new promptRl();

    try {
        const answer = await prompt.question(
            'O que você deseja executar?\n' +
            '(0) exec_file\n' +
            '(1) exec_dns\n' +
            '(2) server\n' +
            '(3) exec_querystring\n' +
            '(4) exec_crypto\n' +
            '(5) exec_luxon\n' +
            '(6) for_in_for_of\n' +
            '(7) classes\n'
        );

        prompt.write('\n');

        let num = answer.match(/\d/) ? Number(answer) : null;
        if ( num == null || num < 0 || num > 7 ) {
            throw new Error(`Opção ${answer} inválida\n`)
        }

        switch (num) {
            case 0:
                exec_file();
                break;
            case 1:
                exec_dns();
                break;
            case 2:
                server( Number(process.env.PORT) );
                break;
            case 3:
                exec_querystring();
                break;
            case 4:
                exec_crypto();
                break;
            case 5:
                exec_luxon();
                break;
            case 6:
                for_in_for_of();
                break;
            default:
                classes();
                break;
        }
    } catch (error) {
        prompt.write((error as Error).message);
    } finally {
        return prompt.close();
    }
}

whatToExecute();