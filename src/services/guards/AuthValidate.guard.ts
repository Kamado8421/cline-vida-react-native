import { router } from "expo-router";
import { HOST } from "../api.service";
import { AuthService } from "../auth.service";

const auth = new AuthService(HOST);
export default async function AuthGuardValidate() {
    const res = await auth.validateUserToken();
    if(!res.success) router.navigate('/');
}