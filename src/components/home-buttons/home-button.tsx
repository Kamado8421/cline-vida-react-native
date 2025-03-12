import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '@/src/config/colors';
import { MyFeatherProps } from '@/src/config/icons.props';

interface PropsType {
    label: string;
    icon: MyFeatherProps;
};
export default function Homeutton(props: PropsType){
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.boxButton}>
            <View style={styles.align}>
                <Feather name={props.icon} size={40} color={colors.blue[200]} />
                <Text style={styles.labelButton}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}