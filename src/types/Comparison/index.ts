import type { Not } from "../Boolean"

export type Eq<A, B> =
    [A] extends [B]
        ? ([B] extends [A] ? true : false)
        : false;

export type Ne<A, B> = Not<Eq<A, B>>;