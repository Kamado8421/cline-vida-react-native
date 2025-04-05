import axios from "axios";
import { UserAuthProps } from "./models/user-auth.model";
import { LoginPromisseType } from "./models/login-promisse.model";
import { getStorageAccessToken, setStorageAccessToken } from "./storages.service";

type UserApiType = {
    info: {
        phoneNumber?: string | undefined;
        dateBirth?: Date | undefined;
        cpf?: string | undefined;
    };
    user: {
        id: string;
        email: string;
        isFullRegister: boolean;
    };
}
export class AuthService {
    constructor(private API_HOST: string = `${process.env.HOST_SERVER}`) { }

    async login(user: UserAuthProps): Promise<LoginPromisseType> {
        try {
            const url = `${this.API_HOST}/login`;
            const response = await axios.post(url, {
                email: user.email,
                password: user.password
            });

            const token = response.data?.access_token;

            if (!token) {
                return {
                    message: 'Access token undefined',
                    success: false
                };
            }

            await setStorageAccessToken(token);


            return {
                message: 'Usuário logado com sucesso.',
                success: true
            };

        } catch (error: any) {
            if (error.response?.data?.error === 'Unauthorized') {
                return {
                    message: 'Endereço de E-mail ou senha inválidos.',
                    success: false
                };
            }

            console.log('Erro no login:', error);
            return {
                message: 'Internal error',
                success: false
            };
        }
    }


    async getUser(): Promise<UserApiType | undefined | { message: string, success: boolean }> {
        try {
            const token = await getStorageAccessToken();

            if (token) {
                const url = `${this.API_HOST}/user`
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.data) {
                    return {
                        success: true,
                        ...response.data
                    }
                }

                return undefined;

            }
        } catch (error: any) {
            if (error.response?.data?.error === 'Unauthorized') {
                return {
                    message: 'Token inválido ou usuário não encontrado.',
                    success: false
                };
            }
        }
    }
}
