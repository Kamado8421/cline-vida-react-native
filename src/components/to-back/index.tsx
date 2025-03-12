import { colors } from '@/src/config/colors';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function ToBackButton({onPress}:{ onPress?: () => void}){
    return (
        <TouchableOpacity onPress={() => onPress ? onPress() : router.back()} style={{marginTop: 50, position: 'absolute', left: 20, height: 35, width: 50}}>
            <Feather name='arrow-left' size={25} color={colors.blue[200]} />
        </TouchableOpacity>
    )
}