export function process(x: number): number;
export function process(x: string): string;
export function process(x: number | string): number | string {
    return x;
} 