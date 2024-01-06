import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
// import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 20, paddingVertical: 40}}>
        <Text preset="headingLarge">Olá</Text>

        <Text preset="paragraphLarge" mt="s8" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          errorMessage="Mensagem de erro"
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
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
