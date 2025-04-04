import axios from "axios";
import { UserAuthProps } from "./models/user-auth.model";
import { LoginPromisseType } from "./models/login-promisse.model";
import { setStorageAccessToken } from "./storages.service";

export class AuthService {
    constructor(private API_HOST: string) { }

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
}
