import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../routes/Routes';

import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const submitForm = () => {
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
        <TextInput label="Seu username" placeholder="@" />

        <TextInput
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />

        <TextInput label="E-mail" placeholder="Digite seu e-mail" />

        <PasswordInput label="Senha" placeholder="Digite sua senha" />
      </Box>

      <Button onPress={submitForm} text="Criar minha conta" />
    </Screen>
  );
}
