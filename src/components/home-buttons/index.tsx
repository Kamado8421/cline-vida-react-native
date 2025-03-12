import { View, Text } from 'react-native';
import Homeutton from './home-button';
import { Icon, IconProps } from '@expo/vector-icons/build/createIconSet';
import { styles } from './styles';
import { MyFeatherProps } from '@/src/config/icons.props';

const buttons: {label: string, icon: MyFeatherProps}[] = [
    {label: 'Consultas', icon: 'book-open'},
    {label: 'Exames', icon: 'book-open'},
    {label: 'Check-up', icon: 'book-open'},
    {label: 'Procedimentos', icon: 'book-open'},
    {label: 'Cirurgias', icon: 'book-open'},
    {label: 'Odonto', icon: 'book-open'},
    {label: 'Resultado Exames', icon: 'book-open'},
    {label: 'Ver Preços', icon: 'book-open'},
    {label: 'Locais Atendimento', icon: 'book-open'},
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