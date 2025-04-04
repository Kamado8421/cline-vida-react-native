import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import Button from '../button';
import { colors } from '@/src/config/colors';
import { router } from 'expo-router';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z
  .object({
    email: z.string().min(1, 'Preencha o campo de e-mail.').email('E-mail inválido.'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
    confirmPassword: z.string().min(1, 'Confirme sua senha.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'], 
  });


type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForms() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterFormData) => {
 
    console.log('Form data:', data);
  };

  return (
    <View>
      <TextInput
        style={[styles.input]}
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        onChangeText={(text) => setValue('email', text)}
        value={watch('email')}
        {...register('email')}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}

      <TextInput
        style={[styles.input]}
        placeholder='Senha'
        secureTextEntry
        onChangeText={(text) => setValue('password', text)}
        value={watch('password')}
        {...register('password')}
      />
      {errors.password && <Text style={styles.labelError}>{errors.password.message}</Text>}

      <TextInput
        style={[styles.input]}
        placeholder='Confirme sua senha'
        secureTextEntry
        onChangeText={(text) => setValue('confirmPassword', text)}
        value={watch('confirmPassword')}
        {...register('confirmPassword')}
      />
      {errors.confirmPassword && <Text style={styles.labelError}>{errors.confirmPassword.message}</Text>}

      <Button
        style={{ marginTop: 20 }}
        title='Cadastrar-se'
        isLoading={isSubmitting}
        disabled={isSubmitting}
        onPress={handleSubmit(handleRegister)}
      />

      <Text style={{ textAlign: 'center', marginTop: 20 }}>Já possui uma conta?</Text>

      <Button
        title='Entrar na conta'
        style={{ backgroundColor: colors.gray[400], marginTop: 20 }}
        onPress={() => router.navigate('/Login')}
      />
    </View>
  );
}
