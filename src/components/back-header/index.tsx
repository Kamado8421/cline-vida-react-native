import React from 'react';
import { View, Text } from 'react-native';
import ToBackButton from '../to-back';
import { colors } from '@/src/config/colors';

interface PropsType {
    title: string;
    desc?: string
 }
export default function BackHeader(props: PropsType) {
    return (
        <View>
            <ToBackButton />
            <View style={{ marginTop: 100 }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'center',
                }}>{props.title}</Text>
                {props.desc && <Text style={{
                    fontWeight: 400,
                    textAlign: 'center',
                    marginTop: 5,
                    color: colors.gray[300]
                }}>{props.desc}</Text>}
            </View>
        </View>
    )
}