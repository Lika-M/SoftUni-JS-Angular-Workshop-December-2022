import { IBase } from "./base";
import { IPost } from "./post";
import { IUser } from "./user";

export interface ITheme extends IBase{
    themeName: string;
    subscribers: string [];
    userId: IUser;
    posts:  IPost [];
}