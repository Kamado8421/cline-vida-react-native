import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    alert: {
        backgroundColor: colors.blue[100],
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: 15
    },

    line: {
        height: 30,
        width: 1.2,
        backgroundColor: 'white'
    }
});