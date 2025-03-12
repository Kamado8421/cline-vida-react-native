import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../config/colors';
import { MaterialIcons } from '@expo/vector-icons';
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