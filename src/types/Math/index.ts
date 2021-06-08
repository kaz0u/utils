import type { Tuple } from "../Tuple"
import type { Or } from "../Boolean"
import type { Eq } from "../Comparison"

type Length<T extends any[]> = T["length"];
type BuildTuple<L extends number> = Tuple<any, L>;
type AnyInfinite<A extends number, B extends number> =
    Or<Eq<A, number>, Eq<B, number>>;

/**
 * Only work on positive integers
 */ 
export type Add<A extends number, B extends number> = 
    AnyInfinite<A, B> extends true
        ? never
        : Length<[...BuildTuple<A>, ...BuildTuple<B>]> & number;

/**
 * Only work on positive integers
 */ 
export type Sub<A extends number, B extends number> =
    AnyInfinite<A, B> extends true
        ? never
        : BuildTuple<A> extends [...(infer U), ...BuildTuple<B>]
            ? Length<U>
            : never;

type MultiAdd<N extends number, A extends number, I extends number> =
    I extends 0
        ? A
        : MultiAdd<N, Add<N, A>, Sub<I, 1>>;

/**
 * Only work on positive integers
 */ 
export type Mul<A extends number, B extends number> = MultiAdd<A, 0, B>;