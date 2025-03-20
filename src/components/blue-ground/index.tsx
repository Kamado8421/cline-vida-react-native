import { View, Text, ViewProps } from 'react-native';
import React from 'react'
import { styles } from './styles';
import ToBackButton from '../to-back';

export default function BlueGround({ children }: ViewProps) {
    return (
        <>
            <ToBackButton whiteColor />
            <View style={styles.ground}>
                {children}
            </View>
        </>
    )
}