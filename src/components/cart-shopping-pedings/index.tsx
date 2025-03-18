import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ShoppingType } from '@/src/data/props';
import { styles } from './styles';
import Button from '../button';


export default function CartShoppingPedings() {

    let total = 0;
    const shoppings: ShoppingType[] = [
        {id: '001', product: 'Lenços Umidecidos', date: '02/02/2025', price: 40.50},
    ];

    shoppings.forEach(item => total += item.price);

    return (
        <View style={styles.area}>
            <Text style={styles.month}>Pendentes no Carrinho</Text>

            {shoppings.length === 0 && <Text>Não há pendências.</Text>}

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

            {shoppings.length > 0 && <>
                <View style={[styles.row, { marginTop: 10 }]}>
                    <Text style={{ fontWeight: 500 }}>Valor Total: </Text>
                    <Text style={styles.price}>R${total.toString().replace('.', ',')}</Text>
                </View>
                <Button title='Finalizar compra agora' onPress={() => Alert.alert('', 'Funcionalidade de pagamentos ainda não incluídos')} />
            </>}
        </View>
    )
}