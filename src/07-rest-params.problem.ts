export function sum(...numbers: number[], factor: number) {
    return numbers.reduce((a, b) => a + b, 0) * factor;
} 