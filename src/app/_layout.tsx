import { StatusBar } from 'react-native';
import { colors } from '../config/colors';
import { Stack } from 'expo-router';
import { resetStorageAccessToken } from '../services/storages.service';

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