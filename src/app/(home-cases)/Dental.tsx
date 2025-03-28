import BackHeader from '@/src/components/back-header';
import DentalCards from '@/src/components/dental-cards';
import IncompleteUserScreen from '@/src/components/incomplete-user-screen';
import ToBackButton from '@/src/components/to-back';
import { UserType } from '@/src/services/api.service';
import { checkUser } from '@/src/services/storages.service';
import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';


export default function Dental(){

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