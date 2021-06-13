export function arrayShallowCompare<T>(lhs: T[], rhs: T[]) {
    return lhs.length === rhs.length
        && lhs.every((value, index) => value === rhs[index]);
}