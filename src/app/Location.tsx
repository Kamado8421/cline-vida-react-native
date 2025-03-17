import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import ToBackButton from '../components/to-back';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import { useState } from 'react';
import { setLocationStorage } from '../services/storages.service';
import { router } from 'expo-router';

const EstadosBrasileiros: { id: string, name: string, uf: string }[] = [
    { id: 'acre-br', name: 'Acre', uf: 'AC' },
    { id: 'alagoas-br', name: 'Alagoas', uf: 'AL' },
    { id: 'amapa-br', name: 'Amapá', uf: 'AP' },
    { id: 'amazonas-br', name: 'Amazonas', uf: 'AM' },
    { id: 'bahia-br', name: 'Bahia', uf: 'BA' },
    { id: 'ceara-br', name: 'Ceará', uf: 'CE' },
    { id: 'distrito-federal-br', name: 'Distrito Federal', uf: 'DF' },
    { id: 'espirito-santo-br', name: 'Espírito Santo', uf: 'ES' },
    { id: 'goias-br', name: 'Goiás', uf: 'GO' },
    { id: 'maranhao-br', name: 'Maranhão', uf: 'MA' },
    { id: 'mato-grosso-br', name: 'Mato Grosso', uf: 'MT' },
    { id: 'mato-grosso-do-sul-br', name: 'Mato Grosso do Sul', uf: 'MS' },
    { id: 'minas-gerais-br', name: 'Minas Gerais', uf: 'MG' },
    { id: 'para-br', name: 'Pará', uf: 'PA' },
    { id: 'paraiba-br', name: 'Paraíba', uf: 'PB' },
    { id: 'parana-br', name: 'Paraná', uf: 'PR' },
    { id: 'pernambuco-br', name: 'Pernambuco', uf: 'PE' },
    { id: 'piaui-br', name: 'Piauí', uf: 'PI' },
    { id: 'rio-de-janeiro-br', name: 'Rio de Janeiro', uf: 'RJ' },
    { id: 'rio-grande-do-norte-br', name: 'Rio Grande do Norte', uf: 'RN' },
    { id: 'rio-grande-do-sul-br', name: 'Rio Grande do Sul', uf: 'RS' },
    { id: 'rondonia-br', name: 'Rondônia', uf: 'RO' },
    { id: 'roraima-br', name: 'Roraima', uf: 'RR' },
    { id: 'santa-catarina-br', name: 'Santa Catarina', uf: 'SC' },
    { id: 'sao-paulo-br', name: 'São Paulo', uf: 'SP' },
    { id: 'sergipe-br', name: 'Sergipe', uf: 'SE' },
    { id: 'tocantins-br', name: 'Tocantins', uf: 'TO' },
]
type MunicipiosType = { id: string, stateId: string, city: string }
const ClinicasAfiliadas: MunicipiosType[] = [
    { id: 'ita-mirim-ma', stateId: 'maranhao-br', city: 'Itapecuru-Mirim' },
    { id: 'caxias-ma', stateId: 'maranhao-br', city: 'Caxias' },
    { id: 'slz-ma', stateId: 'maranhao-br', city: 'São Luís' },
]
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

            <ScrollView style={{ marginTop: 100, paddingHorizontal: 20 }}>
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
            <ScrollView style={{ marginTop: 100, paddingHorizontal: 20 }}>
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