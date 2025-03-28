import BackHeader from '@/src/components/back-header';
import DownloadExameCards from '@/src/components/download-exame-cards';
import IncompleteUserScreen from '@/src/components/incomplete-user-screen';
import ToBackButton from '@/src/components/to-back';
import { UserType } from '@/src/services/api.service';
import { checkUser } from '@/src/services/storages.service';
import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function ResultExams(){

    const [user, setUser] = useState<UserType>();
        useEffect(() => {
                const check = async () => {
                    await checkUser(setUser);
                }
        
                check();
            }, []);
    
    
        if (!user?.infos) return (
                <View style={s.container}>
                    <ToBackButton />
                    <View style={{ flex: 1, marginTop: 80 }}>
                        <IncompleteUserScreen />
                    </View>
                </View>
            )

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