import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderHome from '../../components/header-home';
import Homebuttons from '../../components/home-buttons';
import WhatsAppLinkingButton from '../../components/whatsapp-button';

export default function Home() {
    return (
        <ScrollView style={s.container}>
            <HeaderHome />
            <View style={{ flex: 1, padding: 12 }}>
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

})