import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { router } from 'expo-router';

interface PropsType {
    clinicId: string;
    serviceId: string;
    clinicName: string;
    address: string,
    serviceName: string;
}
export default function DentalCard(props: PropsType){

    const urlDetails = `/ClinicDetails?clinic_id=${props.clinicId}`

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={() => router.push(`/ServiceDetails?clinic_id=${props.clinicId}&&dental_service_id=${props.serviceId}`)}>
            <Text style={styles.title}>{props.clinicName}</Text>
            <Text style={styles.address}>{props.address}</Text>
            <Text style={styles.plano}>{props.serviceName}</Text>
        </TouchableOpacity>
    )
}