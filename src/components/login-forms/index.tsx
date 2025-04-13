import { View, Text, TextInput, TouchableOpacity, DevSettings } from 'react-native';
import { styles } from './styles';
import Button from '../button';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@/src/services/auth.service';
import { HOST } from '@/src/services/api.service';


const loginSchema = z.object({
    email: z.string().min(1, 'Preencha o campo de e-mail.').email('E-mail inválido.'),
    password: z.string().min(1, 'Preencha o campo com sua senha.'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForms() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const handleLogin = async (data: LoginFormData) => {
        const auth = new AuthService(HOST);

        const resp = await auth.login({ ...data });

        if(resp.success){
            DevSettings.reload();
        } else {
            alert(resp.message)
        }

    };

    return (
        <View>
            <TextInput
                style={[styles.input]}
                placeholder='E-mail'
                onChangeText={(text) => setValue('email', text)}
                {...register('email')}
                value={watch('email')}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}

            <TextInput
                style={[styles.input]}
                placeholder='Senha'
                secureTextEntry
                onChangeText={(text) => setValue('password', text)}
                {...register('password')}
                value={watch('password')}
            />
            {errors.password && <Text style={styles.labelError}>{errors.password.message}</Text>}

            <TouchableOpacity disabled={isSubmitting}>
                <Text style={styles.liking}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <Button isLoading={isSubmitting} disabled={isSubmitting} title='Entrar' onPress={handleSubmit(handleLogin)} />

            <Text style={{ textAlign: 'center', marginTop: 20 }}>Não tem uma conta?</Text>

            <Button
                isLoading={false}
                disabled={isSubmitting}
                title='Cadastrar-se'
                style={{
                    backgroundColor: isSubmitting ? colors.gray[300] : colors.gray[400],
                    marginTop: 20,
                }}
                onPress={() => router.navigate('/Register')}
            />
        </View>
    );
}


