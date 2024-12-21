import { Estabelecimento, IEstabelecimento } from "./Estabelecimento";

interface IPadaria extends IEstabelecimento {
    numeroFuncionarios: number;
    alimentacaoNoLocal: boolean;
    saiuPao: () => void;
}

class Padaria extends Estabelecimento implements IPadaria {
    constructor(
        endereco: string,
        tamanhoFila: number,
        produtos: string[],
        public numeroFuncionarios: number,
        public alimentacaoNoLocal: boolean
    ) {
        super( endereco, produtos, tamanhoFila );
    }

    saiuPao() {
        console.log(`Saiu pão quente!, você é a ${ this._tamanhoFila }ª pessoa da fila.`);
        this.diminuirFila();
    }
}

export { IPadaria, Padaria };