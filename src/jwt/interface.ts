import { IRole } from "src/role/schema";

interface IJwtUserData {
    name: string
    id?: string
    role: IRole
}

export interface IJwtData {
    user: IJwtUserData
}