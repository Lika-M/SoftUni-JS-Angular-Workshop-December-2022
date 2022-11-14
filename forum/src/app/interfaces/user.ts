export interface IUser {
    _id: number;
    tel: string;
    email: string;
    username: string;
    password: string;
    themes: string [];
    posts: string[];
    created_at: string;
    updatedAt: string;
    __v: number
}