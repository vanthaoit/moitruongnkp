export interface IMenu {
    id: number | string;
    name: string;
    alias?:string;
    description?: string;
    tags?: string[];
    url?: string;
} 