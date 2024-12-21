interface IEstabelecimento {
    endereco: string;
    tamanhoFila: number;
    produtos: string[];
    crescerFila: () => void;
    diminuirFila: () => void;
}

class Estabelecimento implements IEstabelecimento {
    protected _tamanhoFila;

    constructor(
        public endereco: string,
        public produtos: string[],
        tamanhoFila: number
    ) {
        this.endereco = endereco;
        this._tamanhoFila = tamanhoFila;
    }

    crescerFila() {
        this._tamanhoFila++;
    }

    diminuirFila() {
        this._tamanhoFila--;
    }

    get tamanhoFila() {
        return this._tamanhoFila;
    }
}

export { IEstabelecimento, Estabelecimento };