import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "./api.service";

export type LocationUserType = {
    idCity: string;
    city: string;
    ufState: string;
}
export async function getLocationStorage(setLocation: (args: LocationUserType) => void) {
    try {
        const location = await AsyncStorage.getItem('location_user');
        if (location) {
            await setLocation(JSON.parse(location));
            return JSON.parse(location)
        }
    } catch (error) {
        console.log(error)
    }
}

export async function setLocationStorage(location: LocationUserType) {
    try {
        await AsyncStorage.setItem('location_user', JSON.stringify(location));
        console.log('Localização Armazenada')
    } catch (error) {
        console.log(error);
    }
}

export async function setUserStorage(user: object) {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
}

export async function checkUser(setUser: Function): Promise<UserType | undefined> {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {

        const jsonUser = JSON.parse(storedUser);

        setUser(jsonUser);
        console.log(jsonUser)
        return jsonUser
    }

    return undefined;

}

export async function removeUserStorage() {
    try {

        var user = null

        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('location_user');

        checkUser((value: object) => user = value);

        if (user) {
            console.log('Ocorreu um erro ao limpar o usuário. Tentando novamente...');
            removeUserStorage();
        } else {
            console.log('Storage de usuário limpado com sucesso!')
        }

    } catch (error) {
        console.log('\n\nErro ao limpar storage: ')
        console.error(error);
    }
}


export async function getStorageAccessToken(): Promise<{ access_token: string } | undefined> {
    try {
        const token = await AsyncStorage.getItem('access_token');

        if (token) {
            return {
                access_token: token
            };
        }
    } catch (error) {
        console.log(error)
    }
}

export async function setStorageAccessToken(access_token: string) {
    try {
        await AsyncStorage.setItem('access_token', access_token);
        console.log('Token de Acesso armazenado')
    } catch (error) {
        console.log(error);
    }
}

export async function resetStorageAccessToken() {
    try {
        await AsyncStorage.removeItem('access_token');
        console.log('Token de aceeso resetado com sucesso.')
    } catch (error) {
        console.log('\n\nErro ao limpar storage: ')
        console.error(error);
    }
}