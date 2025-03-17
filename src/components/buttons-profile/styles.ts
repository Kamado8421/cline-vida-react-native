import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bttn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.gray[100],
        paddingHorizontal: 20,
        marginBottom: 5,
        marginTop: 5,
        height: 60,
        width: '96%',
        borderRadius: 8,
        alignSelf: 'center'
    },


    label: {
        fontSize: 16
    }
});