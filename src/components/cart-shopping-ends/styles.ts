import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    area: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15,
        marginTop: 20
    },

    month: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.blue[200]
    },

    product: {
        flex: 2,
        color: colors.gray[300]
    },

    price: {
        flex: 1,
        color: colors.blue[200],
        fontWeight: 600
    },

    date: {
        flex: 1,
        color: colors.gray[300]
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 10
    }
});