import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.blue[100],
        borderRadius: 20,
        width: '100%',
        padding: 20,
    },

    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },

    address: {
        fontSize: 16,

        color: '#fff',
        fontWeight: 600,
        marginTop: 5
    },

    plano: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 600,
        marginTop: 15,
        marginBottom: 20
    }
});