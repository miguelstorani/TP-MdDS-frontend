export interface User {
    id: number,
    username: string;
    organization_id: number,
}

export const emptyUser: User = { id: -1, username: "", organization_id: -1};