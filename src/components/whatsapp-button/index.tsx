import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';
import { Feather, Fontisto } from '@expo/vector-icons';

interface PropsType {
    contentText: 'full' | 'parcial'
}
export default function WhatsAppLinkingButton(props: PropsType) {
    return (
        <TouchableOpacity style={[styles.whatsAppButton, {height: props.contentText === 'full' ? 70 : 60,}]} onPress={() => Linking.openURL('https://wa.me//18002428478')}>
            <View style={styles.whatsAppButtonContent}>
                <Fontisto name='whatsapp' size={25} color={'#fff'} />
                <View style={{ width: 1, height: 32, backgroundColor: '#fff' }} />
                {props.contentText === 'full' ? 
                    <Text style={styles.whatsAppButtonText}>Precisando de ajuda? Acesse nosso{"\n"}WhatsApp!</Text> :
                    <Text style={styles.whatsAppButtonText}>Precisa de ajuda? Clique aqui</Text>
                }
            </View>
            <Feather name='chevron-right' size={23} color={'#fff'} />
        </TouchableOpacity>
    )
}