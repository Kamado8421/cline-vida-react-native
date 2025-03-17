import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    area: {
        backgroundColor:'white' ,//colors.gray[100],
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowOpacity: 1,
        elevation: 4.8,
        shadowRadius: 6,
        borderWidth: 1,
        borderColor: colors.blue[200]
    },

    iconBttn: {
        backgroundColor: colors.blue[200],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 10,
        width: 40,
        height: 40,
    },

    title: {
        color: colors.blue[200],
        fontSize: 16,
        fontWeight: 600
    },

    tag: {
        color: colors.blue[100],
        fontWeight: 700
    },

    detailsArea: {
        backgroundColor: colors.blue[200],
        borderRadius: 50,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 100
    },

    detailsText: {
        color: 'white',
        fontWeight: 600,
        fontSize: 14,
    },

    line: {
        height: 1,
        backgroundColor: colors.gray[200],
        marginVertical: 5
    }
 
});