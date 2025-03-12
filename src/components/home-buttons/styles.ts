import { colors } from '@/src/config/colors';
import { Dimensions, StyleSheet } from 'react-native';

const widthBox = ((Dimensions.get('window').width / 3) - 15);
const iconSize = 40;

export const styles = StyleSheet.create({
    boxButton: {
        borderWidth: 1.3,
        borderColor: colors.blue[100],
        backgroundColor: '#5d8afc22',
        width: widthBox,
        height: widthBox,
        padding: 10,
        borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 2,
        //     height: 2
        // },
        // shadowOpacity: 0.23,
        // elevation: 5,
        // shadowRadius: 6
    },
    align: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelButton: {
        textAlign: 'center',
        color: '#000',
        fontSize: 12.5,
        marginTop: 10
    },
    icon: {
        width: iconSize,
        height: iconSize,
        objectFit: 'contain'
    },

    areaButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 20,
      },
});