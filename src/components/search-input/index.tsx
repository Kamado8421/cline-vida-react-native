import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StyleSheetProperties, ViewProps } from 'react-native';
import { styles } from './styles';
import { colors } from '@/src/config/colors';
import { useState } from 'react';

interface PropsType {
    setValue: (value: string) => void,
    clearValue?: (value: string) => void
};
export default function SearchInput({ setValue, clearValue, ...rest }: PropsType & ViewProps) {

    const [input, setInput] = useState('');

    const handle = (value: string) => {
        setInput(value);
        setValue(value);
    }

    const clearInput = () => {
        clearValue ? clearValue('') : setInput('');
        setInput('');
    }

    return (
        <View {...rest} style={[styles.area, rest.style]}>
            <Feather name='search' size={20} color={colors.gray[200]} />
            <TextInput
                style={styles.input}
                placeholder='Pesquisar'
                value={input}
                onChangeText={handle}
            />
            {input && <TouchableOpacity activeOpacity={0.8} onPress={() => clearInput()}>
                <Feather name='x' size={20} color={colors.gray[100]} />
            </TouchableOpacity>}
        </View>
    )
}