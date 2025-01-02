export function calculateTotal(prices: number[]): number {
    prices.reduce((sum, price) => sum + price, 0);
} 