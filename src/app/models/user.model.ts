export interface Roles {
    reader: boolean;
    admin?: boolean
}
export interface User {
    uid: string;
    displayName: string;
    email: string;
    photoURL?: string;
    roles: Roles
}
