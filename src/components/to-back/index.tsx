import { colors } from '@/src/config/colors';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function ToBackButton({onPress, whiteColor=false}:{ onPress?: () => void, whiteColor?: boolean}){
    return (
        <TouchableOpacity onPress={() => onPress ? onPress() : router.back()} style={{marginTop: 50, zIndex: 1, position: 'absolute', left: 20, height: 35, width: 50}}>
            <Feather name='arrow-left' size={25} color={whiteColor ? '#fff' :colors.blue[200]} />
        </TouchableOpacity>
    )
}