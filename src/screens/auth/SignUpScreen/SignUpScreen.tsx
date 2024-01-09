import React from 'react';

import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
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

      <Button text="Criar minha conta" />
    </Screen>
  );
}
