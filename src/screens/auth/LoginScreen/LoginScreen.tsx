import React from 'react';
import {useForm} from 'react-hook-form';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../routes/Routes';

import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormType = {
  email: string;
  password: string;
};

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const submitForm = (formData: LoginFormType) => {
    console.log(formData);
  };

  return (
    <Screen scrollable>
      <Text preset="headingLarge">Olá</Text>

      <Text preset="paragraphLarge" mt="s8" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'Email obrigatório',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Digite um e-mail válido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatório',
          minLength: {
            value: 8,
            message: 'Digite uma senha válida',
          },
        }}
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="primary"
        mt="s8">
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        text="Entrar"
        mt="s48"
      />

      <Button
        onPress={navigateToSignUpScreen}
        text="Criar conta"
        preset="outline"
        mt="s12"
      />
    </Screen>
  );
}
