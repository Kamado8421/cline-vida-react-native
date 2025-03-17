import { View, Text, ScrollView, DevSettings } from 'react-native';
import Input from '../input';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import Button from '../button';
import { router } from 'expo-router';
import { updateUser, UserType } from '@/src/services/api.service';
import { checkUser } from '@/src/services/storages.service';

interface PropsType { }
export default function EditFormsProfile(props: PropsType) {

    const [errorName, setErrorName] = useState('');
    const [errorCPF, setErrorCPF] = useState('');
    const [errorDateBirth, setErrorDateBirth] = useState('');

    const [fullname, setFullname] = useState('');
    const [cpf, setCpf] = useState('');
    const [birth, setBirth] = useState('');

    const [user, setUser] = useState<UserType>()

    const [isLoading, setIsloading] = useState(false);

    const handleUpdateInfos = async () => {

        if(!user?.email) return

        setIsloading(true)

        if (fullname === '') setErrorName('Preencha o campo com o seu nome');
        else setErrorName('');

        if (cpf === '') setErrorCPF('Preencha o campo com o seu CPF\n(000.000.000-00)');
        else setErrorCPF('');

        if (birth === '') setErrorDateBirth('Preencha o campo com sua data de nascimento\n(dd/mm/aaaa)');
        else setErrorDateBirth('');

        if (!cpf || !fullname || !birth) {
            setIsloading(false)
            return alert('Todos os campos são obrigatórios')
        };

        if (!(cpf.length === 11 || cpf.length === 14)) {
            setIsloading(false)
            return setErrorCPF('CPF com formato inválido');
        }
        if (!(birth.length === 10)) {
            setIsloading(false)
            return setErrorDateBirth('Data com formato inválido (dd/mm/aaaa)');
        }

        const success = await updateUser({
            email: user?.email,
            cpf,
            fullname,
            dateBirth: birth,
        })

        if(success){
            setIsloading(false)
            DevSettings.reload();
        }

        setIsloading(false)
    }


    useEffect(() => {
        const setForms = async () => {
            const res = await checkUser(setUser);

            if (res) {
                setUser(res);
            }

            setFullname(res?.infos?.fullname || '');
            setBirth(res?.infos?.dateBirth || '')
            setCpf(res?.infos?.cpf || '');

        }

        setForms()
    }, [])

    return (
        <ScrollView style={styles.area} showsVerticalScrollIndicator={false}>
            <Input
                placeholder='Nome e Sobrenome*'
                value={fullname}
                error={errorName}
                onChangeText={(v) => setFullname(v)}
            />
            <Input
                placeholder='Informe seu CPF*'
                value={cpf}
                error={errorCPF}
                onChangeText={(v) => setCpf(v)}
            />
            <Input
                placeholder='Data de Nascimento*'
                value={birth}
                error={errorDateBirth}
                onChangeText={(v) => setBirth(v)}
            />
            <Button style={{ marginTop: 20 }} isLoading={isLoading} onPress={() => handleUpdateInfos()} title='Confirmar e Salvar' />
        </ScrollView>
    )
}