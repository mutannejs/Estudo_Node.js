class Animal {
    constructor(
        protected name: string,
        private _size: number
    ) {}

    eat() {
        console.log(`${this.name} se alimentou!`);
    }

    get size() {
        return this._size;
    }
}

type GConstructor<T = {}> = new (...args: any[]) => T;
type MixinAnimal = GConstructor<Animal>

function AerialAnimal<Tbase extends MixinAnimal>(Base: Tbase) {
    return class extends Base {
        fly() {
            console.log(`${this.name} voou alto!`);
        }
    }
}

function SwimmingAnimal<TBase extends MixinAnimal>(Base: TBase) {
    return class extends Base {
        swim() {
            console.log(`${this.name} nadou fundo!`);
        }
    }
}

export { Animal, AerialAnimal, SwimmingAnimal }