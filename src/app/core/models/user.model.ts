export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: number;
    lastLogin?: number;
}