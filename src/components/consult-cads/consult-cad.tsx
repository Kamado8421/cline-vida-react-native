import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';

interface PropsType {
    consultId: string;
    active: boolean,
    dateOpen: string,
    clinicName: string;
    adress: string;
    clinicId: string;
}
export default function ConsultCard(props: PropsType){

    const bgColor = props.active ? {backgroundColor: colors.blue[100]} : {backgroundColor: colors.gray[200]}
    const bgColorDetails = props.active ? {backgroundColor: colors.blue[200]} : {backgroundColor: colors.gray[300]}

    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.card, bgColor ]} onPress={() => router.push(`/ClinicDetails?clinic_id=${props.clinicId}`)}>
            <View style={[styles.dateBox, bgColorDetails]} >
                <Text style={{color: 'white', fontWeight: 600}}>{props.dateOpen}</Text>
            </View>
            <View>
                <Text style={styles.clinicName}>{props.clinicName}</Text>
                <Text style={styles.address}>{props.adress}</Text>
            </View>
            <Feather name='chevron-right' size={20} color={'white'}/>
        </TouchableOpacity>
    )
}