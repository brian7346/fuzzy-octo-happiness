export type NumbersOnly<T> = T extends number ? T : never;

export const value: NumbersOnly<string> = "123"; 