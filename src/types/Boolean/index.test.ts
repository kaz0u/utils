import { Not, And, Or, Xor } from "./index"

describe("Type boolean operations", () => {
    test("Not", () => {
        const _0: Not<false> = true;
        const _1: Not<true> = false;
    });

    test("And", () => {
        const _0: And<false, false> = false;
        const _1: And<false, true> = false;
        const _2: And<true, false> = false;
        const _3: And<true, true> = true;
    });

    test("Or", () => {
        const _0: Or<false, false> = false;
        const _1: Or<false, true> = true;
        const _2: Or<true, false> = true;
        const _3: Or<true, true> = true;
    });

    test("Xor", () => {
        const _0: Xor<false, false> = false;
        const _1: Xor<false, true> = true;
        const _2: Xor<true, false> = true;
        const _3: Xor<true, true> = false;
    });
});