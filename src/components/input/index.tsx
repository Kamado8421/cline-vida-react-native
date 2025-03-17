import { View, Text, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

interface PropsType {
    error?: string
}
export default function Input({error, ...rest}: PropsType & TextInputProps){

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            <TextInput 
                style={[styles.input, isFocused ? styles.inputFocus : {}]}
                {...rest}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {error && <Text style={styles.labelError}>{error}</Text>}
        </View>
    )
}