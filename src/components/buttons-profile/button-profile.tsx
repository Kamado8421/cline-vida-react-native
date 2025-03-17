import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/src/config/colors';

export default function ButtonProfile({children, label, ...rest}: TouchableOpacityProps & {label: string}) {
    return (
        <TouchableOpacity style={styles.bttn} activeOpacity={0.5} {...rest}>
            <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
                {children}
                <Text style={styles.label}>{label}</Text>
            </View>
            <Feather name='chevron-right' size={20} color={colors.blue[200]}/>
        </TouchableOpacity>
    )
}