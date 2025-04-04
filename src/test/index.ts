import { AuthService } from "../services/auth.service";

const auth = new AuthService('http://localhost:3000');

(async () => {
    const r = await auth.login({
        email: 'luciano@gmail.com',
        password: '12345678'
    });

    console.log(r)
})();
