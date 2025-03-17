import { colors } from '@/src/config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    box: {
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.blue[100],
        
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    iconBox: {
        position: 'absolute',
        zIndex: 3,
        right: -5,
        bottom: -5,
        backgroundColor: colors.blue[200],
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }
});