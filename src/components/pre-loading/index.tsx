import { colors } from '@/src/config/colors';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading({ bgColor }: { bgColor?: boolean }) {

    const bgColorBox = bgColor ? colors.blue[100] : 'white';
    const ActivityIndicatorColor = bgColor ? 'white': colors.blue[200];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColorBox }}>
            <Text style={{ position: 'absolute', bottom: 50, color: ActivityIndicatorColor }}>Aguarde...</Text>
            <ActivityIndicator size={'large'} color={ActivityIndicatorColor} />
        </View>
    )
}