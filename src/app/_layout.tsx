import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { colors } from '../config/colors';
import Register from './Register';
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <>
            <StatusBar backgroundColor={colors.blue[100]} translucent={true} barStyle="light-content" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </>
    )
}