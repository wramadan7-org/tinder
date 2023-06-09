export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    gender: string;
}
export interface GetUserById {
    id: number;
}
