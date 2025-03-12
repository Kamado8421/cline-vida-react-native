import React, { useState } from 'react';
import { View, Text, TouchableOpacityProps, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';

type PropsType = TouchableOpacityProps & {
    title: string;
    onPress: () => void;
}
export default function Button({title, onPress, style, ...rest}: PropsType){

    const [isLoading, setIsLoading] = useState(false);

    const handlePress = async () => {
        if(isLoading) return;
        
        setIsLoading(true);
        await onPress();

        setTimeout(() => {
            setIsLoading(false);         
        }, 1500)

    }

    return (
        <TouchableOpacity disabled={isLoading} onPress={() => handlePress()} style={[styles.bttn, style]} {...rest}>
            {isLoading ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    )
}