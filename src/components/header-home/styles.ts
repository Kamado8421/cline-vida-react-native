import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    headerLocationWithProfileArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 55
    },

    locationArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    locationButton: {
        width: 55,
        height: 55,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.gray[200],
        borderWidth: 3,
        padding: 2,
        borderColor: colors.blue[100]
    },

    locationCity: {
        color: 'black',
        fontWeight: 600
    },
    locationLabel: {
        color: colors.gray[300],
        fontSize: 12
    },

    welcomeTitle: {
        marginTop: 30,
        fontSize: 25,
        fontWeight: 700,
        color: colors.blue[300]
    },

    welcomeDesc: {
        color: colors.gray[300],
        fontSize: 14,
        marginTop: 10
    },

    moneyBox: {
        backgroundColor: colors.blue[200],
        height: 42,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 10,
        gap: 10,
        marginTop: 30
    },

    moneyTitle: {
        color: '#fff',
        fontWeight: 600,
        textAlign: 'center',
        fontSize: 12
    }
});