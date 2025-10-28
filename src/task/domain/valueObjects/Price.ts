import { random } from 'lodash';

export class Price {
    constructor(public readonly amount: number) {
        if (amount < 0) {
            throw new Error('El precio no puede ser negativo');
        }
    }

    static randomPrice(min = 5, max = 50): Price {
        const value = Number(random(min, max, true).toFixed(2));
        return new Price(value);
    }

    toPrimitives() {
        return this.amount;
    }
}