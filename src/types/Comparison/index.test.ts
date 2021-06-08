import { Eq } from "./index"

type Foo<T> = T extends string ? string : false;

interface Bar {
    bar: number,
}

class Baz {
    baz = 42;
}

describe("Type boolean operations", () => {
    test("Eq on primitive types", () => {
        const _0: Eq<number, number> = true;
        const _1: Eq<string, string> = true;
        const _2: Eq<number[], number[]> = true;
        type Tuple = [number, string];
        const _3: Eq<Tuple, Tuple> = true;
        const _4: Eq<unknown, unknown> = true;
        const _5: Eq<void, void> = true;
        const _6: Eq<never, never> = true;

        const _7: Eq<number, string> = false;
        const _8: Eq<unknown, string> = false;
        const _9: Eq<never, unknown> = false;
        const _a: Eq<string[], number[]> = false;
        const _b: Eq<[number], number[]> = false;
    });

    test("Eq on complex types", () => {
        const _0: Eq<Foo<string>, Foo<"bar">> = true;
        const _1: Eq<Bar, Bar> = true;
        const _2: Eq<Baz, Baz> = true;
        const _3: Eq<Foo<"bar">, string> = true;

        const _4: Eq<Bar, Baz> = false;
    });

    test("Eq on litterals", () => {
        const _0: Eq<42, 42> = true;
        const _1: Eq<"foo", "foo"> = true;
        type Tuple = [1, 2, 3];
        const _2: Eq<Tuple, Tuple> = true;

        const _3: Eq<42, number> = false;
        const _4: Eq<string, "foo"> = false;
        const _5: Eq<Tuple, number[]> = false;
    });

    test("Eq on unions", () => {
        const _0: Eq<number | string, number | string> = true;
        const _1: Eq<string | "foo", string> = true;

        const _2: Eq<number | string, number> = false;
        const _3: Eq<number | string, number | "foo"> = false;
        const _4: Eq<number[] | string[], (number | string)[]> = false;
    });

    test("Eq on any is always true", () => {
        const _0: Eq<any, any> = true;
        const _1: Eq<number, any> = true;
        const _2: Eq<any, string> = true;
    });
});