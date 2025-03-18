import { View, Text } from 'react-native';
import { styles } from './styles';

interface PropsType {
    
};
export default function CartShoppingEnd({}: PropsType){
    return (
        <View style={styles.area}>
            <Text style={styles.month}>Janeiro</Text>
            <View style={styles.row}>
                <Text style={styles.product}>{'Paracetamossssssssssl'.substring(0, 20)+'...'}</Text>
                <Text style={styles.price}>R$100.00</Text>
                <Text style={styles.date}>12/01/2025</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.product}>Paracetamol</Text>
                <Text style={styles.price}>R$100.00</Text>
                <Text style={styles.date}>12/01/2025</Text>
            </View>
            <View style={[styles.row, {marginTop: 10}]}>
                <Text  style={{fontWeight: 500}}>Total: </Text>
                <Text style={styles.price}>R$200</Text>
            </View>
        </View>
    )
}