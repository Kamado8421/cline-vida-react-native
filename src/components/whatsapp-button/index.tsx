import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';
import { Feather, Fontisto } from '@expo/vector-icons';

interface PropsType {
    contentText: 'full' | 'parcial' | 'linking';
    text?: string;
    whatsappNumber?: string
}
export default function WhatsAppLinkingButton(props: PropsType) {

    const redirect = () => {
        const domain = 'https://wa.me/';
        const url = props.whatsappNumber ? `${domain}/${props.whatsappNumber}` : `${domain}/18002428478`;
        Linking.openURL(url);
    }

    return (
        <TouchableOpacity style={[styles.whatsAppButton, {height: props.contentText === 'full' ? 70 : 60,}]} onPress={() => redirect()}>
            <View style={styles.whatsAppButtonContent}>
                <Fontisto name='whatsapp' size={25} color={'#fff'} />
                <View style={{ width: 1, height: 32, backgroundColor: '#fff' }} />
                {props.contentText === 'full' ? 
                    <Text style={styles.whatsAppButtonText}>Precisando de ajuda? Acesse nosso{"\n"}WhatsApp!</Text> :
                props.contentText === 'parcial' ?
                    <Text style={styles.whatsAppButtonText}>Precisa de ajuda? Clique aqui</Text> :
                props.contentText === 'linking' && props.text && props.whatsappNumber ?
                    <Text style={styles.whatsAppButtonText}>{props.text}</Text> : null
                }
            </View>
            <Feather name='chevron-right' size={23} color={'#fff'} />
        </TouchableOpacity>
    )
}