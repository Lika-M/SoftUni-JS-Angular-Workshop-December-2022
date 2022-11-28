//Dto --> data transfer object
export interface CreateUserDto {
    username: string, 
    email: string, 
    password: string, 
    tel?: string
}