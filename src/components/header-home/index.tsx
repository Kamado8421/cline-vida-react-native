import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';

export default function HeaderHome() {

    const [isShowCash, setIsShowCash] = useState(false);
    const cash = '100,00'

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.headerLocationWithProfileArea}>
                <View style={styles.locationArea}>
                    <TouchableOpacity onPress={() => router.navigate('/Location')} activeOpacity={0.7} style={styles.locationButton}>
                        <MaterialIcons name='add-location-alt' size={25} color={colors.blue[200]} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.locationLabel}>Localização para Clínicas</Text>
                        <Text style={styles.locationCity}>Itapecuru-Mirim - MA</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => router.navigate('/(tabs)/Profile')}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/no-profile.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={styles.welcomeTitle}>Olá, Luciano!</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setIsShowCash((v) => !v)} style={styles.moneyBox}>
                    <Text style={styles.moneyTitle}>Seu Saldo: R$ {isShowCash ? cash : '********'}</Text>
                    <Feather name={isShowCash ? 'eye' : 'eye-off' } size={20} color={colors.blue[100]} />
                </TouchableOpacity>
            </View>
            <Text style={styles.welcomeDesc}>Que tal ficar de olho nas clínicas parceiras?</Text>
        </View>
    )
}