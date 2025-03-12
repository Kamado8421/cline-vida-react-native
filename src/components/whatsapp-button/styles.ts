import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    whatsAppButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.blue[100],
        width: '100%',
        paddingHorizontal: 15,
        borderRadius: 8
    },

    whatsAppButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },

    whatsAppButtonText: {
        color: '#fff',
        fontSize: 14
    }
});