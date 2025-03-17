import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    area: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 5,
        paddingLeft: 25,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.blue[100],
        width: '100%'
    },

    input: {
       width: 280
    }
});