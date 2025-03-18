import BackHeader from '@/src/components/back-header';
import Button from '@/src/components/button';
import IncompleteUserScreen from '@/src/components/incomplete-user-screen';
import ToBackButton from '@/src/components/to-back';
import { UserType } from '@/src/services/api.service';
import { checkUser, getLocationStorage, LocationUserType } from '@/src/services/storages.service';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ServiceLocations() {
    const [user, setUser] = useState<UserType>();
    const [location, setLocation] = useState<LocationUserType>()

    useEffect(() => {
        const check = async () => {
            await checkUser(setUser);  
            await getLocationStorage(setLocation);
        }

        check();
    }, []);

    
    if (!user?.infos) return (
        <View style={s.constainer}>
            <ToBackButton />
            <View style={{flex: 1, marginTop: 80}}>
                <IncompleteUserScreen />
            </View>
        </View>
    )

    if (!location) return (
        <View style={s.constainer}>
            <ToBackButton />
            <View style={{flex: 1, paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', marginBottom: 30}}>⚠️ Antes de proceguir, você precisa{'\n'}informar sua localização. Clique abaixo{'\n'}para proceguir.</Text>
                <Button title='Informar Localização' onPress={() => router.navigate('/Location')}/>
            </View>
        </View>
    )

    return (
        <View style={s.constainer}>
            <BackHeader title='Locais de Atendimento' desc={`Cidade de ${location.city} - ${location.ufState}`}/>

            <View>
                <Image 
                    source={require('../../assets/cline-default.webp')}
                    style={{backgroundColor: 'red'}}
                />
            </View>

        </View>
    )
}   

const s = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#ffff'
    }
})