import { View, Text, StyleSheet } from 'react-native';
import LoginForms from '../components/login-forms';
import { colors } from '../config/colors';
import RegisterForms from '../components/register-forms';
import ToBackButton from '../components/to-back';

export default function Register(){
    return (
        <View style={s.container}>
            <ToBackButton />
            <Text style={s.title}>Crie sua conta</Text>
            <Text style={s.welcome}>Junte a nós e tenha acesso a diversos profissionais na saúde.</Text>
            <View style={{flex: 1, paddingHorizontal: 30, marginTop: 40, width: '100%'}}>
                <RegisterForms />
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
        marginTop: 120,
        fontWeight: 800
    },

    welcome: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 600,
        textAlign: 'center',
    }
})