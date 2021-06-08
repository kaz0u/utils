import { Eq } from "../Comparison"
import { Add, Sub, Mul } from "./index"

describe("Type boolean operations", () => {
    test("Add", () => {
        const _0: Eq<Add<2, 5>, 7> = true;
        const _1: Eq<Add<8, 4>, 12> = true;
        const _2: Eq<Add<number, 5>, never> = true;
        const _3: Eq<Add<5, number>, never> = true;
    });

    test("Sub", () => {
        const _0: Eq<Sub<5, 2>, 3> = true;
        const _1: Eq<Sub<number, 5>, never> = true;
        const _2: Eq<Sub<5, number>, never> = true;
        const _3: Eq<Sub<2, 5>, never> = true;
    });

    test("Mul", () => {
        const _0: Eq<Mul<5, 2>, 10> = true;
        const _1: Eq<Mul<0, 2>, 0> = true;
        const _2: Eq<Mul<2, 0>, 0> = true;
        const _3: Eq<Mul<number, 5>, never> = true;
        const _4: Eq<Mul<5, number>, never> = true;
    });
});