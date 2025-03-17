import { View, Text, ScrollView, Alert, DevSettings } from 'react-native';
import ButtonProfile from './button-profile';
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/src/config/colors';
import { removeUserStorage } from '@/src/services/storages.service';


export default function ButtonsProfile() {

    const handleLogout = () => {

        Alert.alert('Sair da Conta', 'Você tem certeza que quer sair da sua conta?', [
            {
                text: 'cancelar',
            },
            {
                text: 'confirmar', onPress: async () => {
                    await removeUserStorage();
                    DevSettings.reload();
                }
            }
        ])
        

    }

    return (
        <ScrollView style={{width: '100%'}}>
            <ButtonProfile label='Médicos Favoritos'>
                <Feather name='star' size={20} color={colors.blue[200]} />
            </ButtonProfile>
            <ButtonProfile label='Termos e Condições'>
                <MaterialCommunityIcons name='content-paste' size={20} color={colors.blue[200]} />
            </ButtonProfile>
            <ButtonProfile label='Política e Pricacidade'>
                <FontAwesome name='chain' size={20} color={colors.blue[200]} />
            </ButtonProfile>
            <ButtonProfile label='Sair' onPress={() => handleLogout()}>
                <Ionicons name='exit-outline' size={20} color={'red'} />
            </ButtonProfile>
        </ScrollView>
    )
}