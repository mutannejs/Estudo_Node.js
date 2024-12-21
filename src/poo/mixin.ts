import { Animal, AerialAnimal, SwimmingAnimal } from './mixin/Animal';

export default function mixin() {
    const hummingBird = new (AerialAnimal(Animal))('Verde', 15);
    hummingBird.fly();

    const duck = new (AerialAnimal(SwimmingAnimal(Animal)))('Psyduck', 80);
    duck.swim();
    duck.fly();
}