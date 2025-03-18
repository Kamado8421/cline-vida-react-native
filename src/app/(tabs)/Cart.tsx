import CartShoppingEnds from '@/src/components/cart-shopping-ends';
import CartShoppingPedings from '@/src/components/cart-shopping-pedings';
import IncompleteUserScreen from '@/src/components/incomplete-user-screen';
import { colors } from '@/src/config/colors';
import { UserType } from '@/src/services/api.service';
import { checkUser } from '@/src/services/storages.service';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cart() {

    const [screen, setScreen] = useState<'pending' | 'completed' | ''>('');
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        const check = async () => {
            const result = await checkUser(setUser);

            console.log(result);
            if (result?.infos) {
                setScreen('pending');
            }
        }

        check();
    }, []);

    if (!screen) return <IncompleteUserScreen />

    return (
        <View style={s.container}>
            <View style={s.areaBttnScreens}>
                <TouchableOpacity activeOpacity={0.8} style={[s.bttnScreen, screen === 'pending' ? s.bttnSelected : {}]} onPress={() => setScreen('pending')}>
                    <Text style={[s.titleButtonScree, screen === 'pending' ? s.titleButtonScreeSelected : {}]}>Pendentes</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[s.bttnScreen, screen === 'completed' ? s.bttnSelected : {}]} onPress={() => setScreen('completed')}>
                    <Text style={[s.titleButtonScree, screen === 'completed' ? s.titleButtonScreeSelected : {}]}>Concluídos</Text>
                </TouchableOpacity>
            </View>
            {screen === 'pending' ? <View style={{ backgroundColor: '#efefef', flex: 1 }}>
                <CartShoppingPedings />
            </View> :

            screen === 'completed' ? <View style={{ backgroundColor: '#efefef', flex: 1 }}>
                <CartShoppingEnds />
            </View> : null}
        </View>
    )

}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    areaBttnScreens: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 0,
        justifyContent: 'space-around'
    },

    bttnSelected: {
        borderBottomWidth: 2,
        borderBottomColor: colors.blue[100]
    },


    titleButtonScreeSelected: {
        color: colors.blue[200],
        fontWeight: 500
    },

    titleButtonScree: {
        fontSize: 16,
        fontWeight: 400,

    },
    bttnScreen: {
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray[100]
    }
})