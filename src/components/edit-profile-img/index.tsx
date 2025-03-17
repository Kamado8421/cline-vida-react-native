import { View, Image, ViewProps, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

export default function EditProfileImg({ ...rest }: ViewProps) {
    return (
        <View style={[styles.box, rest.style]}>
            <Image
                style={styles.image}
                source={require('../../assets/no-profile.png')}
            />
            <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Ainda não implementado!')} style={styles.iconBox}>
                <Feather name='camera' size={16} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}