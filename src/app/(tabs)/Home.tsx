import { View, ScrollView, StyleSheet, Image } from 'react-native';
import HeaderHome from '../../components/header-home';
import Homebuttons from '../../components/home-buttons';
import WhatsAppLinkingButton from '../../components/whatsapp-button';
import { colors } from '@/src/config/colors';

export default function Home() {
    return (
        <ScrollView style={s.container}>
            <HeaderHome />
            <View style={{ flex: 1, padding: 12 }}>
                <Image 
                    style={s.banner}
                    source={require('../../assets/banner01.png')}
                />
                <WhatsAppLinkingButton contentText='full' />
                <Homebuttons />
            </View>
        </ScrollView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    banner: {
        height: 200,
        width: '100%',
        borderRadius: 20,
        objectFit: 'cover',
        borderWidth: 2,
        borderColor: colors.blue[100]
    }

})