import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

interface PropsType {
    date: string;
    clinicName: string;
    examName: string;
    megabytes: number;
}
export default function DownloadExameCard({date, clinicName, examName, megabytes}: PropsType){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Download Concluído (Fake)')} style={styles.card}>
            <View style={styles.row}>
                <Text style={[styles.text, {fontSize: 20}]}>PDF - {date}</Text>
                <Text style={[styles.text, {fontSize: 18}]}>{clinicName}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.text, {fontSize: 18, paddingVertical: 10}]}>{examName}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.text, {fontSize: 16}]}>Baixar resultado de exame</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Feather name='download-cloud' size={20} color={'#fff'} />
                    <Text style={[styles.text, {fontSize: 16}]}>{megabytes}MB</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}