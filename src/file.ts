import * as path from 'node:path';
import * as fs from 'node:fs';

export function exec_file() {
    console.time("leitura");
    console.time("escrita");
    const filePath = path.join(process.cwd(), 'assets', 'texto_exemplo.txt');
    const newFilePath = path.join(process.cwd(), 'assets', 'texto_formatado.txt');
    try {
        const data = fs.readFileSync(filePath, {}).toString().split('\n');
        console.timeEnd("leitura");
        console.table({
            zero: data[0],
            one: data[1],
            two: data[2]
        });
        fs.writeFileSync(
            newFilePath,
            data
                .map((row, index) => `${index} - ${row}`)
                .join('\n')
        );
        console.log('Novo arquivo gerado!');
        console.timeEnd("escrita");
    } catch (error) {
        console.log((error as NodeJS.ErrnoException).message);
        return;
    }
}