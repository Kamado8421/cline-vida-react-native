import { View, FlatList } from 'react-native';
import SearchInput from '../search-input';
import { useEffect, useState } from 'react';
import PriceBlock from './price-block';
import { MedicineType } from '@/src/data/props';
import { medicines } from '@/src/data/medicine.array';

export default function PricesBlocks() {

    const [search, setSearch] = useState('');
    const [medicinesList, setMedicinesList] = useState<MedicineType[]>([]);
    const [card, setCard] = useState<MedicineType[]>([]);

    const searchMedicines = (txt: string) => {
        const filterItems = medicines.filter(m => m.name.toLowerCase().includes(txt.toLowerCase()));
        setMedicinesList(filterItems);
    }

    const addCard = (id: string) => {
        const remedy = medicines.find(c => c.id === id);

        if(remedy){
            setCard([...card, remedy]);
        } 
    }

    const removeCard = (id: string) => {

    }

    useEffect(() => {
        searchMedicines(search);
    }, [])

    return (
        <View>
            <SearchInput clearValue={() => searchMedicines('')} style={{ marginTop: 15, marginBottom: 20 }} setValue={(v) => searchMedicines(v)} />
            <FlatList
                style={{ height: '88%' }}
                data={medicinesList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PriceBlock
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        addCard={addCard}
                        removeCard={removeCard} />
                )}
            />
        </View>
    )
}