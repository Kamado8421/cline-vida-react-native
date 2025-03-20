import BackHeader from '@/src/components/back-header';
import DownloadExameCards from '@/src/components/download-exame-cards';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultExams(){
    return (
        <View style={s.container}>
            <BackHeader title='Resultado de Exames' desc={'Aqui você pode baixar seus resultados de\nexames disponíveis.'}/>

            <View style={{paddingHorizontal: 20, marginTop: 50}}>
                <DownloadExameCards />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})