import React from 'react';
import { View, Text } from 'react-native';
import ToBackButton from '../to-back';

interface PropsType {
    title: string;
 }
export default function BackHeader(props: PropsType) {
    return (
        <View>
            <ToBackButton />
            <View style={{ marginTop: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'center',
                }}>{props.title}</Text>
            </View>
        </View>
    )
}