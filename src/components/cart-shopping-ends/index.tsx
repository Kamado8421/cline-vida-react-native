import { FlatList } from 'react-native';
import CartShoppingEnd from './CartShoppingEnd';
import { shoppingsEnds } from '@/src/data/shopping-ends.array';

export default function CartShoppingEnds(){
    return (
        <FlatList 
            data={shoppingsEnds}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <CartShoppingEnd 
                    month={item.month}
                    year={item.year}
                    shoppings={item.shoppings}
                />
            )}
        />
    )
}