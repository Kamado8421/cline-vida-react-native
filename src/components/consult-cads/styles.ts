import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        zIndex: 5,
        marginTop: 30
    },

    clinicName: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 700
    },

    address: {
        fontSize: 16,
        color: '#FFFFFF',
    },

    dateBox: {
        position: 'absolute',
        top: -10,
        right: 30,
        backgroundColor: 'red',
        zIndex: 3,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 50
    }


});