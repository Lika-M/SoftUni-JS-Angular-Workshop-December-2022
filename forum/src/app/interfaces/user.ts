import { IBase } from "./base";
import { IPost } from "./post";
import { ITheme } from "./theme";

export interface IUser extends IBase {
    tel: string;
    email: string;
    username: string;
    password: string;
    themes: ITheme[];
    posts: IPost[];
}