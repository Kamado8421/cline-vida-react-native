import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../config/colors';
import { router } from 'expo-router'
import Button from '../components/button';
import { useEffect, useState } from 'react';
import { checkUser, getStorageAccessToken } from '../services/storages.service';
import { UserType } from '../services/api.service';
import Loading from '../components/pre-loading';

export default function Index() {

    const [user, setUser] = useState<UserType>();
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const check = async () => {
            setIsloading(true);

            const token = await getStorageAccessToken();

            if(token){
                router.navigate('/(tabs)/Home');
                setIsloading(false);
            } else { 
                setIsloading(false);
            }
        }
        check();
    }, [])

    if (isLoading) return <Loading />

    return (
        <View style={s.container}>
            <Image
                source={require('../assets/index-ilustracao.jpg')}
                style={s.ilustracao}
            />
            <Text style={s.title}>
                <Text style={{ color: colors.blue[200] }}>Seja </Text>
                Bem-Vindo<Text style={{ color: colors.blue[200] }}>(a)</Text> ao{'\n'}CLINE <Text style={{ color: colors.blue[200] }}>VIDA</Text>
            </Text>
            <Text style={s.desc}> Aqui você terá acesso a consultas,
                exames e especialistas em saúde de todo o Brasil,
                tudo em um só lugar
            </Text>

            <Button title='Cadastrar-se como Médico' style={{ backgroundColor: colors.blue[200], width: '82%', marginTop: 20 }} onPress={() => router.navigate('/Register')} />
            <View style={s.boxBttn}>
                <TouchableOpacity onPress={() => router.navigate('/Register')} activeOpacity={0.6} style={[s.bttn, { backgroundColor: colors.gray[100] }]}>
                    <Text style={[s.titleBttn, { color: colors.gray[400] }]}>Cadastrar-se</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/Login')} activeOpacity={0.6} style={[s.bttn, { backgroundColor: colors.blue[100] }]}>
                    <Text style={[s.titleBttn, { color: '#fff' }]}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    ilustracao: {
        height: 300,
        width: 300,
        marginTop: 150
    },

    title: {
        fontSize: 26,
        fontWeight: 800,
        color: colors.blue[100],
        textAlign: 'center',
        marginTop: 30
    },

    desc: {
        fontSize: 14,
        color: colors.gray[400],
        textAlign: 'center',
        marginTop: 20,
        width: '80%',
        marginBottom: 20
    },

    boxBttn: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 20
    },

    bttn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        width: 160,
        borderRadius: 8,
    },

    titleBttn: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center'
    }
})

