import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e7edfc',
        height: 55,
        padding: 15,
        width: '100%',
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 5,
    },

    inputFocus: {
        borderWidth: 1,
        borderColor: colors.blue[100]
    },

    liking: {
        color: colors.blue[100],
        paddingVertical: 20,
        fontWeight: 600,

        textAlign: 'right'
    },

    labelError: {
        color: 'red'
    }
});