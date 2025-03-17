import axios from "axios";
import { setUserStorage } from "./storages.service";

const HOST = 'http://192.168.110.15:3333';

export type UserInfosType = {
    fullname: string,
    dateBirth: string,
    cpf: string,
    money?: number
}

export type UserType = {
    email: string;
    infos?: UserInfosType
}
export async function loginUser(data: { email: string, password: string }): Promise<UserType | undefined> {
    const result = await axios.post(`${HOST}/login`, data);

    console.log(result.data);
    if (result.status === 200) {
        const user = result.data
        setUserStorage(user);

        return user;
    }
    return undefined;
}

export async function updateUser(data: UserInfosType & {email: string}): Promise<boolean> {
    const result = await axios.post(`${HOST}/update-infos`, data);

    console.log(result.data)
    if (result.status === 200) {
        const user = result.data
        setUserStorage(user);

        return true;
    }
    return false;
}