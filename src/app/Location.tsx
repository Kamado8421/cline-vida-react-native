import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import ToBackButton from '../components/to-back';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import { useState } from 'react';
import { setLocationStorage } from '../services/storages.service';
import { router } from 'expo-router';
import { ClinicasAfiliadas, EstadosBrasileiros } from '../data/locations.array';
import { MunicipiosType } from '../data/props';

export default function Location() {

    const [page, setPage] = useState<'estados' | 'municipios'>('estados');
    const [isLoading, setIsloading] = useState(true);

    const [municipios, setMunicipios] = useState<MunicipiosType[]>([]);

    const handleNextPage = (id: string) => {
        setIsloading(true);
        setPage('municipios');
        const mnps = ClinicasAfiliadas.filter(item => item.stateId === id);
        setMunicipios(mnps);
        setTimeout(() => {
            setIsloading(false);
        }, 1000);
    }

    const setLocation = async (id: string) => {
        setIsloading(true)
        const city = ClinicasAfiliadas.find(i => i.id === id);

        if (city) {
            const state = EstadosBrasileiros.find(i => i.id === city.stateId);
            if (state) {
                await setLocationStorage({
                    idCity: city.id,
                    city: city.city,
                    ufState: state.uf
                })

                setIsloading(false);
                router.navigate('/(tabs)/Home');
                return;
            }
        }

        alert('Ocorreu um erro.')

    }

    if (page === 'estados') return (
        <View style={s.container}>
            <ToBackButton />
            <View style={{ marginTop: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name='add-location-alt' size={25} color={colors.blue[200]} />
                <Text style={s.title}> Locatização de Clínicas</Text>
            </View>
            <Text style={s.subtitle}>Selecione seu Estado</Text>

            <ScrollView style={{ marginTop: 50, paddingHorizontal: 20 }}>
                {EstadosBrasileiros.map((st) => (
                    <TouchableOpacity onPress={() => handleNextPage(st.id)} style={s.bttn} activeOpacity={0.7} key={st.id}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 600 }}>{st.name}</Text>
                        <Feather name='chevron-right' size={20} color={'#fff'} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )

    if (page === 'municipios') return (
        <View style={s.container}>
            <ToBackButton onPress={() => setPage('estados')} />
            <View style={{ marginTop: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name='add-location-alt' size={25} color={colors.blue[200]} />
                <Text style={s.title}> Locatização de Clínicas</Text>
            </View>
            <Text style={s.subtitle}>Clique abaixo para escolher{'\n'}o seu Município</Text>
            <ScrollView style={{ marginTop: 50, paddingHorizontal: 20 }}>
                {isLoading && <View style={s.container}>
                    <ActivityIndicator style={{ marginTop: '65%' }} size={'large'} color={colors.blue[100]} />
                </View>}

                {!isLoading && municipios.length > 0 ? municipios.map((mn) => (
                    <TouchableOpacity onPress={() => setLocation(mn.id)} style={s.bttn} activeOpacity={0.7} key={mn.id}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 600 }}>{mn.city}</Text>
                        <Feather name='check' size={20} color={'#fff'} />
                    </TouchableOpacity>
                )) : !isLoading && <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 600, marginTop: 80 }}>Não encontramos pontos de clínicas{'\n'}nesse municipio.</Text>}

            </ScrollView>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1
    },

    title: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        marginTop: 10,
        color: colors.gray[300]
    },

    bttn: {
        width: '100%',
        height: 60,
        marginBottom: 10,
        backgroundColor: colors.blue[100],
        paddingHorizontal: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6
    }
})