import { View, Text, Alert } from 'react-native';
import Input from '../input';
import Button from '../button';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { UserType } from '@/src/services/api.service';
import { checkUser } from '@/src/services/storages.service';

export default function ExamsForms() {

    const [errorName, setErrorName] = useState('');
    const [errorCPF, setErrorCPF] = useState('');
    const [errorDateBirth, setErrorDateBirth] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const [fullname, setFullname] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');

    const [user, setUser] = useState<UserType>()

    const [isLoading, setIsloading] = useState(false);

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

    const handleConfirmData = () => {
        if (!user?.email) return

        setIsloading(true)

        if (fullname === '') setErrorName('Preencha o campo com o seu nome');
        else setErrorName('');

        if (cpf === '') setErrorCPF('Preencha o campo com o seu CPF\n(000.000.000-00)');
        else setErrorCPF('');

        if (birth === '') setErrorDateBirth('Preencha o campo com sua data de nascimento\n(dd/mm/aaaa)');
        else setErrorDateBirth('');

        if (phone === '') setErrorPhone('Preencha o campo com seu número de telefone\n(00) 90000-0000');
        else setErrorPhone('');

        if (!cpf || !fullname || !birth || !phone) {
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
        Alert.alert('Mensagem Visual', 'Ok, seu formulário foi enviado aos responsáveis. Aguarde sua validação e o retorno de confirmação.', [
            { text: 'Voltar ao início', onPress: () => router.navigate('/(tabs)/Home') }
        ])

        setIsloading(false);
    }



    return (
        <View>
            <Input
                placeholder='CPF*'
                value={cpf}
                error={errorCPF}
                onChangeText={(v) => setCpf(v)}
            />
            <Input
                placeholder='Nome completo*'
                value={fullname}
                error={errorName}
                onChangeText={(v) => setFullname(v)}
            />
            <Input
                placeholder='Data de Nascimento*'
                value={birth}
                error={errorDateBirth}
                onChangeText={(v) => setBirth(v)}
            />
            <Input
                placeholder='Data para consulta*'
            />
            <Input
                placeholder='Horário*'
            />
            <Input
                placeholder='Telefone*'
                value={phone}
                error={errorPhone}
                onChangeText={(v) => setPhone(v)}
            />
            <Input
                placeholder='Sentindo algo de errado?*'
            />
            <Button style={{ marginTop: 20, marginBottom: 30 }} title='Confirmar e Marcar' onPress={() => handleConfirmData()} />
        </View>
    )
}