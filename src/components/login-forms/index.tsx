import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Button from '../button';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';
import { loginUser } from '@/src/services/api.service';

export default function LoginForms() {

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [focus, setFocus] = useState<'email' | 'password' | ''>('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);

        if (email === '') setErrorEmail('Preencha o campo de e-mail.'); else setErrorEmail('')
        if (password === '') setErrorPassword('Preencha o campo com sua senha.'); else setErrorPassword('')

        if (!email || !password) return setIsLoading(false);

        const user = await loginUser({ email, password });
        console.log(user)

        if (user) {
            router.navigate('/(tabs)/Home');
            return;
        } else {
            setErrorEmail('');
            setPassword('');
            setFocus('');
            setErrorPassword('E-mail ou senha inválidos. Tente Novamente.')
            setIsLoading(false);
        }
       
    }


    return (
        <View>
            <TextInput
                style={[styles.input, focus === 'email' ? styles.inputFocus : {}]}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocus('email')}
                onBlur={() => setFocus('')}
            />
            {errorEmail && <Text style={styles.labelError}>{errorEmail}</Text>}

            <TextInput
                style={[styles.input, focus === 'password' ? styles.inputFocus : {}]}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                onBlur={() => setFocus('')}
                onFocus={() => setFocus('password')}
                secureTextEntry={true}
            />
            {errorPassword && <Text style={styles.labelError}>{errorPassword}</Text>}
            <TouchableOpacity disabled={isLoading}>
                <Text style={styles.liking}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <Button isLoading={isLoading} disabled={isLoading} title='Entrar' onPress={() => handleLogin()} />
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Não tem uma conta?</Text>
            <Button isLoading={false} disabled={isLoading} title='Cadastrar-se' style={{ backgroundColor: isLoading ? colors.gray[300] : colors.gray[400], marginTop: 20 }} onPress={() => router.navigate('/Register')} />
        </View>
    )
}

