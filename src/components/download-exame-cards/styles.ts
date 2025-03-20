import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.blue[100],
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginBottom: 10
    },

    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        color: '#fff',
        fontWeight: 600
    }
});