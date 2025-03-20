import BackHeader from '@/src/components/back-header';
import ConsultCards from '@/src/components/consult-cads';
import { colors } from '@/src/config/colors';
import { consults } from '@/src/data/consults.array';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Consult() {

    const consultsPedings = consults.filter(c => !c.finished);
    const consultsEnds = consults.filter(c => c.finished);

    const [screen, setScreen] = useState<'pending' | 'finished'>('pending');

    return (
        <View style={s.container}>
            <BackHeader title='Suas Consultas' desc='Verifique suas consultas marcadas e pedentes.' />

            <View style={s.areaOptions}>
                <TouchableOpacity style={[s.bttnOptions, screen === 'pending' ? s.bttnOptionsActive : {}]}  onPress={() => setScreen('pending')}>
                    <Text style={{ color: screen === 'pending' ? '#fff' : colors.blue[100], fontWeight: 600 }}>Pendentes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[s.bttnOptions, screen === 'finished' ? s.bttnOptionsActive : {}]} onPress={() => setScreen('finished')} >
                    <Text style={{ color: screen === 'finished' ? '#fff' : colors.blue[100], fontWeight: 600 }}>Concluídas</Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                {screen === 'pending' && <>
                    <Text style={s.title}>Consultas Pendentes</Text>
                    {consultsPedings.length > 0 ?
                        <ConsultCards data={consultsPedings} /> :
                        <Text>Não há consultas pendentes.</Text>
                    }
                </>}

                {screen === 'finished' && <>
                    <Text style={s.title}>Consultas Realizadas</Text>
                    {consultsEnds.length > 0 ?
                        <ConsultCards data={consultsEnds} /> :
                        <Text>Não há consultas realizadas.</Text>
                    }
                </>}
            </View>
        </View>

    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 20,
        fontWeight: 700,
        color: colors.gray[400],
    },

    areaOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20,
        marginTop: 30
    },

    bttnOptions: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.blue[100]
    },

    bttnOptionsActive: {
        backgroundColor: colors.blue[100]
    }


})