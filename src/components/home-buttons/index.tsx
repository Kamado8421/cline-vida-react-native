import { View } from 'react-native';
import Homeutton from './home-button';
import { styles } from './styles';
import { MyFontAwesome } from '@/src/config/icons.props';
import { router } from 'expo-router';

const buttons: {label: string, icon: MyFontAwesome, onPress?: () => void}[] = [
    {label: 'Consultas', icon: 'stethoscope', onPress: () => router.navigate('/(home-cases)/Consult')},
    {label: 'Exames', icon: 'flask', onPress: () => router.push('/(home-cases)/ServiceLocations?route_exams=true')},
    //{label: 'Check-up', icon: 'check-circle-o'},
    //{label: 'Procedimentos', icon: 'user-md'},
    //{label: 'Cirurgias', icon: 'spinner'},
    {label: 'Odonto', icon: 'heart-o', onPress: () => router.navigate('/(home-cases)/Dental')},
    {label: 'Resultado Exames', icon: 'check-square-o', onPress: () => router.navigate('/(home-cases)/ResultExams')},
    {label: 'Ver Preços', icon: 'tags', onPress: () => router.navigate('/(home-cases)/ShowPrices')},
    {label: 'Locais Atendimento', icon: 'hospital-o', onPress: () => router.navigate('/(home-cases)/ServiceLocations')},
]
export default function Homebuttons(){
    return (
        <View style={styles.areaButtons}>
            {buttons.map((bttn, index) => 
                <Homeutton onPress={bttn.onPress} label={bttn.label} icon={bttn.icon} key={index} 
            />)}
        </View>
    )
}