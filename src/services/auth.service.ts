/*import axios from "axios";
import { UserAuthProps } from "./models/user-auth.model";
import { LoginPromisseType } from "./models/login-promisse.model";
import { getStorageAccessToken, setStorageAccessToken } from "./storages.service";

export type UserApiType = {
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


    async validateUserToken(): Promise<UserApiType | undefined | { message: string, success: boolean }> {
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
}*/

import axios, { AxiosError } from "axios";
import { UserAuthProps } from "./models/user-auth.model";
import { LoginPromisseType } from "./models/login-promisse.model";
import { getStorageAccessToken, setStorageAccessToken } from "./storages.service";

export type UserApiType = {
    info: {
        phoneNumber?: string;
        dateBirth?: Date;
        cpf?: string;
    };
    user: {
        id: string;
        email: string;
        isFullRegister: boolean;
    };
};

type ValidateUserTokenResponse =
    | (UserApiType & { success: true })
    | { success: false; message: string };

export class AuthService {
    constructor(private API_HOST: string) { }

    async login(user: UserAuthProps): Promise<LoginPromisseType> {
        try {
            const url = `${this.API_HOST}/login`;
            const response = await axios.post(url, {
                email: user.email,
                password: user.password,
            });

            const token = response.data?.access_token;

            if (!token) {
                return {
                    message: "Access token undefined",
                    success: false,
                };
            }

            await setStorageAccessToken(token);

            return {
                message: "Usuário logado com sucesso.",
                success: true,
            };
        } catch (error: any) {
            if (error.response?.data?.error === "Unauthorized") {
                return {
                    message: "Endereço de E-mail ou senha inválidos.",
                    success: false,
                };
            }

            console.error("Erro no login:", error);
            return {
                message: "Erro interno ao tentar logar.",
                success: false,
            };
        }
    }

    async validateUserToken(): Promise<ValidateUserTokenResponse> {
        try {
            const token = await getStorageAccessToken().then(data => data?.access_token.trim());

            if (!token) {
                return {
                    success: false,
                    message: "Token de acesso não encontrado.",
                };
            }

            const url = `${this.API_HOST}/user`;
            const response = await axios.get<UserApiType>(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                return {
                    ...response.data,
                    success: true,
                };
            }

            return {
                success: false,
                message: "Dados do usuário não encontrados.",
            };
        } catch (error) {
            const err = error as AxiosError<any>;

            if (err.response?.data?.error === "Unauthorized") {
                return {
                    success: false,
                    message: "Token inválido ou usuário não autorizado.",
                };
            }

            console.error("Erro ao validar token:", err);
            return {
                success: false,
                message: "Erro ao validar token do usuário.",
            };
        }
    }
}



