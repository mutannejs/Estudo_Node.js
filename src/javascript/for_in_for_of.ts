export default function for_in_for_of() {
    const arrayOfNames = ['Ana', 'Bruno', 'Carlos', 'Diego', 'Elias', 'Fábio', 'Gabriel', 'Helena', 'Iago', 'João'];
    const people = {
        name: 'João',
        age: 40,
        address: {
            street: 'Rua 2',
            district: 'Jardim Jardim'
        },
        children: ['Fábio', 'Ana']
    };

    console.dir(arrayOfNames);

    // for..of
    let saida = '';
    for (let n of arrayOfNames) {
        saida += n[0];
    }
    console.log(saida, '\n');

    // for..in
    console.log("{");
    for (let p in people) {
        console.log(`  ${p}: ${ people[p as ('name' | 'age' | 'address' | 'children')] }`);
    }
    console.log("}");
}