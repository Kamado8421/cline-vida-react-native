import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Button from '../button';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';

export default function LoginForms() {

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [focus, setFocus] = useState<'email' | 'password' | ''>('');

    const user = {
        email: 'luciano@gmail.com', password: '12345678'
    }

    const handleLogin = () => {
        if (email === '') setErrorEmail('Preencha o campo de e-mail.'); else setErrorEmail('')
        if (password === '') setErrorPassword('Preencha o campo com sua senha.'); else setErrorPassword('')

        if (!email || !password) return;

        if (email === user.email && password === user.password) {
            setTimeout(() => {
                router.navigate('/(tabs)/Home');
            }, 2000);
            return;
        }

        setErrorPassword('E-mail ou senha inválidos. Tente Novamente.')
        setPassword('');
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
            <TouchableOpacity>
                <Text style={styles.liking}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <Button title='Entrar' onPress={() => handleLogin()} />
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Não tem uma conta?</Text>
            <Button title='Cadastrar-se' style={{ backgroundColor: colors.gray[400], marginTop: 20 }} onPress={() => router.navigate('/Register')} />
        </View>
    )
}

