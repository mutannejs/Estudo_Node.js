import { Padaria } from './inheritance/Padaria';

export default function inheritance() {
    const trigo = new Padaria(
        'Rua 6',
        5,
        [ 'pão de sal', 'pão de leite', 'mistura', 'frios' ],
        3,
        false
    )

    trigo.saiuPao();
    trigo.saiuPao();
}