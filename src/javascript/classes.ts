class Pol {
    private _value;
    constructor(private name: string, private base: number) {
        this._value = base;
    }

    get value() {
        return this._value;
    }

    mul() {
        this._value *= this.base;
    }

    print() {
        console.log(`${this.name} = ${this._value}`);
    }
}

export default function classes() {
    const pol2 = new Pol('x', 2);

    pol2.print();
    pol2.mul();
    pol2.print();
    pol2.mul();
    console.log(`O valor final é ${ pol2.value }`);
}