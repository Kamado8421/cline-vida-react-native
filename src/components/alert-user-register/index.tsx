import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { router } from 'expo-router';

export default function AlertUserRegister() {
    return (
        <TouchableOpacity onPress={() => router.navigate('/EditProfile')} activeOpacity={0.7} style={styles.alert}>
            <AntDesign name='warning' size={25} color={'white'} />
            <View style={styles.line} />
            <Text style={{ color: 'white' }}><Text style={{fontWeight: 600}}>Atenção: </Text>Finalize o seu cadastro para ter{'\n'}acesso aos rescuros no Cline Vida.</Text>
            <AntDesign name='right' size={15} color={'white'}/>
        </TouchableOpacity>
    )
}