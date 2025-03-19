import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface PropsType {}
export default function DentalCard(props: PropsType){
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <Text style={styles.title}>My Component!</Text>
            <Text style={styles.address}>My Component!</Text>
            <Text style={styles.plano}>My Component!</Text>
        </TouchableOpacity>
    )
}