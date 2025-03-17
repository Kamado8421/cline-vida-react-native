import ToBackButton from '@/src/components/to-back';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../config/colors';
import ButtonsProfile from '../components/buttons-profile';
import AlertUserRegister from '../components/alert-user-register';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { checkUser } from '../services/storages.service';
import { UserType } from '../services/api.service';

export default function Profile() {

    const [showRegisterAlert, setShowRegisterAlert] = useState(true);
    const [user, setUser] = useState<UserType>()

    useEffect(() => {
        const check = async () => {
            const res = await checkUser(setUser);

            if (res) {
                setUser(res);

                if(res?.infos){
                    setShowRegisterAlert(false)
                } else {
                    setShowRegisterAlert(true)
                }
            } else {
                router.navigate('/');
            }
        }

        check()
    }, [])

    
    return (
        <View style={s.container}>
            <ToBackButton />
            <TouchableOpacity onPress={() => router.navigate('/EditProfile')} activeOpacity={0.5} style={{ marginTop: 45, position: 'absolute', right: 10, height: 35, width: 50 }}>
                <MaterialCommunityIcons name='playlist-edit' size={40} color={colors.blue[100]} />
            </TouchableOpacity>
            <View style={s.profileArea}>
                <View style={{
                    borderWidth: 3,
                    borderColor: colors.blue[100],
                    padding: 2, borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Image
                        style={s.imageProfile}
                        source={require('../assets/no-profile.png')}
                    />
                </View>
                <View>
                    <Text style={s.name}>{user?.infos?.fullname || 'Usuário Cline Vida'}</Text>
                    <Text style={s.acess}>Conta de Paciente</Text>
                </View>
            </View>


            {showRegisterAlert ? <AlertUserRegister /> :
                <View>
                    <View style={s.infos}>
                        <Feather name='phone-call' size={16} color={colors.blue[100]} />
                        <Text style={s.txtInfo}>(99) 91234-5678</Text>
                    </View>
                    <View style={s.infos}>
                        <Feather name='mail' size={16} color={colors.blue[100]} />
                        <Text style={s.txtInfo}>{user?.email}</Text>
                    </View>
                </View>
            }

            <View style={{ marginTop: 20 }}>
                <ButtonsProfile />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    imageProfile: {
        height: 75,
        width: 75,
        borderRadius: 100,
    },

    name: {
        fontSize: 23,
        fontWeight: 600,
        color: colors.blue[200]
    },

    profileArea: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 100,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[100],
        paddingBottom: 30
    },

    acess: {
        color: colors.gray[400],
        fontSize: 16,
        fontWeight: 500
    },

    infos: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginLeft: 30,
        marginTop: 10
    },

    txtInfo: {
        color: colors.gray[300],
        fontSize: 14
    }

})