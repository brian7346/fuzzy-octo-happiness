export interface Config {
    readonly id: number;
    name: string;
}

export const config: Config = { id: 1, name: "Default" };
config.id = 2; 