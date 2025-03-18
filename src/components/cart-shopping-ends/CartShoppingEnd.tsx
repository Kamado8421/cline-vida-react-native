import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { MonthsType, ShoppingType } from '@/src/data/props';

interface PropsType {
    month: MonthsType;
    year: number;
    shoppings: ShoppingType[];
};
export default function CartShoppingEnd({ month, year, shoppings }: PropsType) {

    let total = 0;
    
    for(const shopping of shoppings){
        total += shopping.price;
    }

    return (
        <View style={styles.area}>
            <Text style={styles.month}>{month.substring(0, 3)}/{year}</Text>

            <FlatList
                data={shoppings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.product}>{item.product.substring(0, 20) + (item.product.length > 20 ? '...' : '')}</Text>
                        <Text style={styles.price}>R${item.price.toString().replace('.', ',')}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                )}
            />

            <View style={[styles.row, { marginTop: 10 }]}>
                <Text style={{ fontWeight: 500 }}>Valor Total: </Text>
                <Text style={styles.price}>R${total.toString().replace('.', ',')}</Text>
            </View>
        </View>
    )
}