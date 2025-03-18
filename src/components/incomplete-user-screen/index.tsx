import { View, Text, StyleSheet } from 'react-native';
import AlertUserRegister from '../alert-user-register';

export default function IncompleteUserScreen() {
    return (
        <View style={s.container}>
            <Text style={{ textAlign: 'center', marginTop: 15 }}>Você ainda não possui acesso a essa função.</Text>
            <AlertUserRegister />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})