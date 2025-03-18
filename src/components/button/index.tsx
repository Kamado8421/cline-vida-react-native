import React, { useState } from 'react';
import { View, Text, TouchableOpacityProps, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';

type PropsType = TouchableOpacityProps & {
    title: string;
    isLoading?: boolean;
    onPress: () => void;
}
export default function Button({title, isLoading, onPress, style, ...rest}: PropsType){

    const handlePress = async () => {
        if(isLoading) return;
        await onPress();
    }

    return (
        <TouchableOpacity disabled={isLoading} onPress={() => handlePress()} style={[styles.bttn, style]} {...rest}>
            {isLoading ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    )
}