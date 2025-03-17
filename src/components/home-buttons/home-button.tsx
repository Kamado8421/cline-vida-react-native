import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { colors } from '@/src/config/colors';
import { MyFontAwesome } from '@/src/config/icons.props';

interface PropsType {
    label: string;
    icon:  MyFontAwesome;
    onPress?: () => void;
};
export default function Homeutton(props: PropsType){

    const redirect = () => {
        if(!props.onPress) return Alert.alert('Tela não encontrada', `A tela "${props.label}" ainda não existe`);
        props.onPress();
    }

    return (
        <TouchableOpacity onPress={() => redirect()} activeOpacity={0.5} style={styles.boxButton}>
            <View style={styles.align}>
                
                 <FontAwesome name={props.icon} size={40} color={colors.blue[200]} />
            
                <Text style={styles.labelButton}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}