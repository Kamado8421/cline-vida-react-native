import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Button from '../button';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';

export default function RegisterForms() {

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [confirmpassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [focus, setFocus] = useState<'email' | 'password' | 'confirm' | ''>('');

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
            {errorEmail && <Text>{errorEmail}</Text>}

            <TextInput
                style={[styles.input, focus === 'password' ? styles.inputFocus : {}]}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                onBlur={() => setFocus('')}
                onFocus={() => setFocus('password')}
                secureTextEntry={true}
            />

            {errorPassword && <Text>{errorPassword}</Text>}
            <TextInput
                style={[styles.input, focus === 'confirm' ? styles.inputFocus : {}]}
                placeholder='Confirme sua senha'
                value={confirmpassword}
                onChangeText={setConfirmPassword}
                onBlur={() => setFocus('')}
                onFocus={() => setFocus('confirm')}
                secureTextEntry={true}
            />
            {errorConfirmPassword && <Text>{errorConfirmPassword}</Text>}

            <Button style={{marginTop: 20}} title='Cadastrar-se' onPress={() => { }} />
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Já possui uma conta?</Text>
            <Button title='Entrar na conta' style={{ backgroundColor: colors.gray[400], marginTop: 20 }} onPress={() => router.navigate('/Login')} />
        </View>
    )
}

