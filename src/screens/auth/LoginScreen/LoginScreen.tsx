import React from 'react';

import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge">Olá</Text>

      <Text preset="paragraphLarge" mt="s8" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{mb: 's8'}}
      />

      <Text preset="paragraphSmall" bold color="primary" mt="s8">
        Esqueci minha senha
      </Text>

      <Button text="Entrar" mt="s48" />

      <Button text="Criar conta" preset="outline" mt="s12" />
    </Screen>
  );
}
