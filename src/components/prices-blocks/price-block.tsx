import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { colors } from '@/src/config/colors';

interface PropsType {
    id: string;
    name: string;
    price: number;
    card?: number;
    addCard: (id: string) => void;
    removeCard: (id: string) => void;
}
export default function PriceBlock(props: PropsType) {
    return (
        <View style={styles.area}>
            <View>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 600, color: colors.gray[400] }}>a partir de <Text style={styles.tag}>R${props.price.toString().replace('.', ',')}</Text></Text>
                <TouchableOpacity style={styles.detailsArea} activeOpacity={0.7} onPress={() => Alert.alert('Sobre o Medicamento', 'Informações sobre '+props.name+' não encontradas.')}>
                    <Text style={styles.detailsText}>Detalhes</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <TouchableOpacity style={styles.iconBttn} onPress={() => props.removeCard(props.id)} activeOpacity={0.8}>
                    <Feather color={'white'} name='minus-circle' size={16} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>0</Text>
                <TouchableOpacity style={styles.iconBttn} onPress={() => props.addCard(props.id)} activeOpacity={0.8}>
                    <Feather color={'white'} name='plus-circle' size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}