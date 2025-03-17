import PricesBlocks from '@/src/components/prices-blocks';
import ToBackButton from '@/src/components/to-back';
import { colors } from '@/src/config/colors';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ShowPrices() {
    return (
        <View style={s.container}>
            <ToBackButton />
            <TouchableOpacity style={{marginTop: 50, position: 'absolute', right: 0, height: 50, width: 50}} onPress={() => Alert.alert('Seu carrinho', 'Nada para ver por aqui.')}>
                <Feather size={30} color={colors.blue[100]} name='shopping-cart'/>
            </TouchableOpacity>
            <Text style={s.title}>Medicamentos</Text>
            <Text style={s.desc}>Busque por um medicamneto</Text>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <PricesBlocks />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 23,
        fontWeight: 700,
        marginTop: 100,
        textAlign: 'center',
        color: '#333',
        marginBottom: 5
    },

    desc: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.gray[200]
    }
})