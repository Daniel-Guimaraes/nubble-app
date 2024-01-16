import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {SignUpSchemaType, signUpSchema} from './signUpSchema';

import {RootStackParamList} from '@routes';

import {useResetNavigationSuccess} from '@hooks';

import {
  Box,
  Text,
  Screen,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = (formData: SignUpSchemaType) => {
    console.log(formData);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'greenSuccess',
      },
    });
  };

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Crie sua conta
      </Text>

      <Box gap="s16" mb="s48">
        <FormTextInput
          control={control}
          name="username"
          label="Seu username"
          placeholder="@"
        />

        <FormTextInput
          control={control}
          name="fullName"
          autoCapitalize="words"
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        text="Criar minha conta"
      />
    </Screen>
  );
}
