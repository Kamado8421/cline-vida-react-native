import { View, Text, StyleSheet } from 'react-native';
import LoginForms from '../components/login-forms';
import { colors } from '../config/colors';
import {Feather} from '@expo/vector-icons'
import ToBackButton from '../components/to-back';

export default function Login(){
    return (
        <View style={s.container}>
            <ToBackButton/>
            <Text style={s.title}>Faça seu Login</Text>
            <Text style={s.welcome}>Bem-vindo(a) de volta à sua{'\n'}plataforma de sáude!</Text>
            <View style={{flex: 1, paddingHorizontal: 30, marginTop: 60, width: '100%'}}>
                <LoginForms />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: colors.blue[100],
        marginTop: 150,
        fontWeight: 800
    },

    welcome: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 600,
        textAlign: 'center',
    }
})