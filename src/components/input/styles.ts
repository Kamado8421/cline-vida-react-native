import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        height: 50,
        borderRadius: 8,
        marginTop: 10
    },

    inputFocus: {
        borderWidth: 2.5,
        borderColor: colors.blue[100]
    },

    labelError: {
        color: 'red',
        marginTop: 5
    }
});