import * as rl from 'readline';

class promptRl {
    private prompt: rl.Interface;

    public constructor() {
        this.prompt = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public question(query: string) {
        return new Promise<string>(
            (resolve, reject) => {
                try {
                    this.prompt.question(
                        query + ': ',
                        (answer) => resolve(answer)
                    );
                } catch (error) {
                    reject( new Error('Erro no question!') );
                }
            });
    }

    public close() {
        this.prompt.close();
    }
}

export async function exec_prompt() {
    const prompt = new promptRl();

    try {
        try {
            const name = await prompt.question('Qual seu nome?');
            console.log('Prazer ' + name);
            const age = await prompt.question('E sua idade?');
            console.log('Legal que seja ' + Number(age));
            return;
        } catch (error) {
            console.log("Algo deu errado :(");
            console.error((error as Error).message);
        }
    } finally {
        return prompt.close();
    }
}