import BackHeader from '@/src/components/back-header';
import Button from '@/src/components/button';
import IncompleteUserScreen from '@/src/components/incomplete-user-screen';
import ToBackButton from '@/src/components/to-back';
import { colors } from '@/src/config/colors';
import { Clinics } from '@/src/data/clinics.array';
import { ClinicType } from '@/src/data/props';
import { UserType } from '@/src/services/api.service';
import { checkUser, getLocationStorage, LocationUserType } from '@/src/services/storages.service';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function ServiceLocations() {
    const [user, setUser] = useState<UserType>();
    const [location, setLocation] = useState<LocationUserType>()
    const [filterClinics, setFilterClinics] = useState<ClinicType[]>([])

    useEffect(() => {
        const check = async () => {
            await checkUser(setUser);
            await getLocationStorage(setLocation);

            if (location) {
                const filter = Clinics.filter(clinic => clinic.cityId === location.idCity);
                if(filter.length > 0 ){
                    setFilterClinics(filter)
                }
            } 
        }

        check();
    }, []);


    if (!user?.infos) return (
        <View style={s.constainer}>
            <ToBackButton />
            <View style={{ flex: 1, marginTop: 80 }}>
                <IncompleteUserScreen />
            </View>
        </View>
    )

    if (!location) return (
        <View style={s.constainer}>
            <ToBackButton />
            <View style={{ flex: 1, paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', marginBottom: 30 }}>⚠️ Antes de proceguir, você precisa{'\n'}informar sua localização. Clique abaixo{'\n'}para proceguir.</Text>
                <Button title='Informar Localização' onPress={() => router.navigate('/')} />
            </View>
        </View>
    )

    return (
        <View style={s.constainer}>
            <BackHeader title='Locais de Atendimento' desc={`Cidade de ${location.city} - ${location.ufState}`} />

            {Clinics.filter(clinic => clinic.cityId === location.idCity).length > 0 ? <FlatList
                style={{ paddingHorizontal: 20, marginTop: 40 }}
                data={Clinics.filter(clinic => clinic.cityId === location.idCity)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={s.clineArea}> 
                        <Image
                            source={require('@/assets/images/icon.png')}
                            style={s.imgClinica}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={s.clineName}>{item.name}</Text>
                            <Text style={s.clineAdress}>{item.address}, Nº{item.residentialNumber}{'\n'}{item.neighborhood} - {item.cep}</Text>
                            <Button title='Detalhes' activeOpacity={0.8} style={{ height: 40 }} onPress={() => router.push(`/ClinicDetails?clinic_id=${item.id}`)} />
                        </View>
                    </View>
                )}
            /> : <Text style={{ textAlign: 'center', marginTop: '60%' }}>⚠️ Nenhum Local encontrado.</Text>}

        </View>
    )
}

const s = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#ffff',
    },

    clineArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.blue[100],
        borderWidth: 1,
        marginTop: 10
    },

    imgClinica: {
        height: 100,
        width: 100,
        objectFit: 'cover',
        borderRadius: 10,
        backgroundColor: colors.gray[100],
        borderColor: colors.blue[100],
        borderWidth: 2
    },

    clineName: {
        fontWeight: 600,
        color: colors.blue[300],
        fontSize: 18
    },

    clineAdress: {
        color: colors.gray[300],
        marginBottom: 10
    }
})