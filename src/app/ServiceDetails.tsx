import { View, Text, StyleSheet, Alert } from 'react-native';
import BlueGround from '../components/blue-ground';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from 'react';
import { Clinics } from '../data/clinics.array';
import { DentalServecesType, ClinicType } from '../data/props'
import Loading from '../components/pre-loading';
import Button from '../components/button';
import { router } from 'expo-router';
import { colors } from '@/src/config/colors';

export default function ServiceDetails() {

    const { dental_service_id, clinic_id } = useLocalSearchParams<{ dental_service_id: string, clinic_id: string }>();
    const [service, setService] = useState<DentalServecesType>();
    const [clinic, setClinic] = useState<ClinicType>();

    useEffect(() => {
        const getService = () => {
            const clinicFounded = Clinics.find(c => c.id === clinic_id);

            if (clinicFounded) {
                if (clinicFounded?.dentalServices?.length) {
                    const serviceFounded = clinicFounded.dentalServices.find(ds => ds.id === dental_service_id);
                    if (serviceFounded) {
                        setService(serviceFounded);
                        setClinic(clinicFounded);
                    }
                }
            } else {
                alert('Algo deu errado.')
            }
        }

        getService();
    }, [])

    if (!service || !clinic) return <Loading />

    return (
        <View style={s.container}>
            <BlueGround>
                <Text style={s.clinicName}>{clinic.name}</Text>
                <Text style={s.serviceName}>{service.title}</Text>
            </BlueGround>
            <View style={{ paddingHorizontal: 20 }}>
                <Button title='Ver Clínica' style={{ marginTop: 20 }} onPress={() => router.push(`/ClinicDetails?clinic_id=${clinic.id}`)} />
                <Text style={s.title}>Detalhes de Contrato</Text>
                <Text style={s.text}>{service.desc}</Text>
                <Button title='Se informar mais' style={{ marginTop: 20 }} onPress={() => Alert.alert('Link Externo', 'Redicionará o usuário para o WhatsApp da compania ou documento online melhor expresso.')} />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    clinicName: {
        marginTop: 90,
        fontSize: 25,
        fontWeight: 600,
        color: 'white',
        textAlign: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: 30,
        marginBottom: 10,
    },

    text: {
        fontSize: 16,
        color: colors.gray[300],
        textAlign: 'justify'
    },

    serviceName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 500,
        color: 'white',
        textAlign: 'center'
    },
})