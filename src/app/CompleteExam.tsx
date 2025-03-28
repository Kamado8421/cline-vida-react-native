import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import BlueGround from '../components/blue-ground';
import { colors } from '../config/colors';
import ExamsForms from '../components/exams-forms';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ClinicType } from '../data/props';
import { Clinics } from '../data/clinics.array';
import Loading from '../components/pre-loading';


export default function CompleteExame() {

    const { clinic_id } = useLocalSearchParams<{ clinic_id: string }>();
    const [clinic, setClinic] = useState<ClinicType>();

    useEffect(() => {
        const getClinic = () => {
            const clinicFounded = Clinics.find(c => c.id === clinic_id);

            
            if (clinicFounded) {
                setClinic(clinicFounded);
            } else {
                Alert.alert('Algo deu Errado!', 'Não conseguimos buscar as informações da clínica', [
                    {
                        text: 'Voltar',
                        onPress: () => router.back()
                    }
                ])
            }
        }
        getClinic();
    }, [])

    if (!clinic) return <Loading />

    return (
        <ScrollView style={s.container}>
            <BlueGround>
                <Text style={s.clinicName}>{clinic.name}</Text>
                <Text style={s.subtitle}>Marque a seua consulta</Text>
            </BlueGround>
            <Text style={s.desc}>Preencha todos os campos corretamente.</Text>
            <View style={s.form}>
                <ExamsForms />
            </View>
        </ScrollView>
    )
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    clinicName: {
        marginTop: 100,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },


    form: {
        paddingHorizontal: 20
    },

    subtitle: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 500
    },

    desc: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: colors.gray[300]
    }
})