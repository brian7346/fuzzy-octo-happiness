export interface Storage {
    getItem(key: string): string;
    [key: string]: string | ((key: string) => string);
}

export const storage: Storage = {
    getItem(key: string): string {
        return key;
    },
    ["customKey"]: "value"
} 