import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { colors } from '../config/colors';
import Button from '../components/button';
import { useEffect, useState } from 'react';
import { ClinicType, MunicipiosType } from '../data/props';
import { Clinics } from '../data/clinics.array';
import Loading from '../components/pre-loading';
import { ClinicasAfiliadas } from '../data/locations.array';
import BlueGround from '../components/blue-ground';
import WhatsAppLinkingButton from '../components/whatsapp-button';

export default function ClinicDetails() {

    const { clinic_id } = useLocalSearchParams<{ clinic_id: string }>();
    const [clinic, setClinic] = useState<ClinicType>();
    const [city, setCity] = useState<MunicipiosType>();

    useEffect(() => {
        const getClinic = () => {
            const clinicFounded = Clinics.find(c => c.id === clinic_id);

            if (clinicFounded) {

                const cityFounded = ClinicasAfiliadas.find(m => m.id === clinicFounded.cityId);

                if (cityFounded) {
                    setCity(cityFounded);
                }

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
        <View style={s.container}>
            <BlueGround>
                <View style={s.imageBox}>
                    <Image
                        source={clinic.urlImage ? {uri: clinic.urlImage} : require('../assets/cline-default.webp')}  // replace with the actual clinic image URL
                        style={s.image}
                    />
                </View>
            </BlueGround>
            <ScrollView style={{ flex: 1, backgroundColor: '', marginTop: 75 }}>
                <View style={s.content}>
                    <Text style={s.clinicName}>{clinic.name}</Text>
                    <Text style={s.adress}>
                        {clinic.address},
                        Nº{clinic.residentialNumber}, 
                        {clinic.neighborhood}{'\n'}
                        {city?.city} - {clinic.cep}</Text>
                    <Text style={s.doctor}>{clinic.doctorName}</Text>

                    <View>
                        <View style={s.infoBox}>
                            <Text style={s.infoLabel}>CNPJ:</Text>
                            <Text style={s.infoValue}>{clinic.cnpj}</Text>
                        </View>
                        <View style={s.infoBox}>
                            <Text style={s.infoLabel}>Telefone:</Text>
                            <Text style={s.infoValue}>{clinic.phone}</Text>
                        </View>
                        <View style={s.infoBox}>
                            <Text style={s.infoLabel}>Email:</Text>
                            <Text style={s.infoValue}>{clinic.email}</Text>
                        </View>
                        {clinic.whatsappNumber && <View style={s.infoBox}>
                            <Text style={s.infoLabel}>WhatsApp:</Text>
                            <Text style={s.infoValue}>{clinic.whatsappNumber}</Text>
                        </View>}
                    </View>
                    {clinic.whatsappNumber &&
                        <WhatsAppLinkingButton
                            contentText='linking'
                            whatsappNumber={clinic.whatsappNumber}
                            text={`Falar com ${clinic.name}`}
                        />}
                    <Button title='Marcar Consulta' style={{ marginTop: 25, marginBottom: 30 }} onPress={() => router.push(`/CompleteExam?clinic_id=${clinic.id}`)} />
                </View>
            </ScrollView>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    ground: {
        backgroundColor: colors.blue[100],
        height: 200
    },

    imageBox: {
        borderWidth: 3,
        borderColor: colors.blue[100],
        backgroundColor: colors.gray[100],
        padding: 5,
        borderRadius: 10,
        height: 160,
        width: 180,
        position: 'absolute',
        bottom: -75,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        height: 145,
        width: 165,
        borderRadius: 5,
        objectFit: 'cover'
    },

    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    doctor: {
        backgroundColor: colors.blue[100],
        padding: 8,
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
        marginTop: 20,
        marginBottom: 30,
        paddingHorizontal: 15,
        borderRadius: 50,
        minWidth: 200,
        textAlign: 'center',
    },

    clinicName: {
        color: colors.blue[200],
        fontWeight: 700,
        fontSize: 23,
        marginTop: 20
    },

    adress: {
        color: colors.gray[300],
        marginTop: 5,
        textAlign: 'center'
    },

    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#e6e6e67f',
        borderRadius: 8,
        height: 50,
        width: '100%',
        marginBottom: 5,
    },

    infoLabel: {
        color: colors.gray[400],
        fontSize: 16,
        fontWeight: 500,

    },

    infoValue: {
        color: colors.blue[200],
        fontSize: 16,
        fontWeight: 500
    }

})