import * as rl from 'readline';

export default class promptRl {
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

    public write(data: string) {
        return new Promise<string | void>(
            (resolve, reject) => {
                try {
                    resolve( this.prompt.write(data) );
                } catch (error) {
                    reject( new Error('Erro no write!') );
                }
            }
        )
    }

    public close() {
        this.prompt.close();
    }
}