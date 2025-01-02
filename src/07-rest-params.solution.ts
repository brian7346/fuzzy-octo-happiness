export function sum(factor: number, ...numbers: number[]) {
    return numbers.reduce((a, b) => a + b, 0) * factor;
} 