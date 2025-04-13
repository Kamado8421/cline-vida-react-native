import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';
import { checkUser, getLocationStorage, LocationUserType } from '@/src/services/storages.service';
import AlertUserRegister from '../alert-user-register';
import { UserType } from '@/src/services/api.service';
import { string } from 'zod';

type Props = {
    email: string
}
export default function HeaderHome({email}: Props) {

    const [isLoading, setIsloading] = useState(true);
    const [isShowCash, setIsShowCash] = useState(false);
    const [user, setUser] = useState<UserType>();

    const [cityName, setCityName] = useState('Caregando...');
    const [city, setCity] = useState<LocationUserType>();

    const [showRegisterAlert, setShowRegisterAlert] = useState(true);

    // fazer aqui a chamamda na api dos dados

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.headerLocationWithProfileArea}>
                <View style={styles.locationArea}>
                    <TouchableOpacity onPress={() => router.navigate('/Location')} activeOpacity={0.7} style={styles.locationButton}>
                        <MaterialIcons name='add-location-alt' size={25} color={colors.blue[200]} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.locationLabel}>Localização para Clínicas</Text>
                        <Text style={styles.locationCity}>{cityName}</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => router.navigate('/Profile')}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/no-profile.png')}
                    />
                </TouchableOpacity>
            </View>

            {showRegisterAlert ? <AlertUserRegister /> :
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.welcomeTitle}>Olá, {user?.infos?.fullname.split(' ')[0]}</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsShowCash((v) => !v)} style={styles.moneyBox}>
                        <Text style={styles.moneyTitle}>Seu Saldo: R$ {isShowCash ? `${user?.infos?.money ? user.infos.money : '0,00'}` : '********'}</Text>
                        <Feather name={isShowCash ? 'eye' : 'eye-off'} size={20} color={colors.blue[100]} />
                    </TouchableOpacity>
                </View>
            }
            <Text style={styles.welcomeDesc}>Que tal ficar de olho nas clínicas parceiras?</Text>
        </View>
    )
}