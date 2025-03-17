import { View } from 'react-native';
import Homeutton from './home-button';
import { styles } from './styles';
import { MyFontAwesome } from '@/src/config/icons.props';

const buttons: {label: string, icon: MyFontAwesome}[] = [
    {label: 'Consultas', icon: 'stethoscope'},
    {label: 'Exames', icon: 'flask'},
    {label: 'Check-up', icon: 'check-circle-o'},
    {label: 'Procedimentos', icon: 'user-md'},
    {label: 'Cirurgias', icon: 'spinner'},
    {label: 'Odonto', icon: 'heart-o'},
    {label: 'Resultado Exames', icon: 'check-square-o'},
    {label: 'Ver Preços', icon: 'tags'},
    {label: 'Locais Atendimento', icon: 'hospital-o'},
]
export default function Homebuttons(){
    return (
        <View style={styles.areaButtons}>
            {buttons.map((bttn, index) => 
                <Homeutton label={bttn.label} icon={bttn.icon} key={index} 
            />)}
        </View>
    )
}