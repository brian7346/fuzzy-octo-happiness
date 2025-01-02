export interface Storage {
    getItem(key: string): string;
}

export const storage: Storage = {
    getItem(key: string): string {
        return key;
    },
    ["customKey"]: "value"
} 