import BackHeader from '@/src/components/back-header';
import DentalCards from '@/src/components/dental-cards';
import { View, Text, StyleSheet } from 'react-native';


export default function Dental(){
    return (
        <View style={s.container}>
            <BackHeader title='Odontologia' desc={'Os melhores planos odontológicos estão aqui. Clique em\numa opção abaixo para conferir as ofertas.'}/>
            <DentalCards />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})