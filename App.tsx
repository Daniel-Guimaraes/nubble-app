import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 20}}>
        <Text preset="headingLarge">Hello word!!</Text>

        <Button text="Entrar" marginBottom="s20" disabled />

        <Button text="loading" loading marginBottom="s20" disabled />

        <Button text="Outline" preset="outline" marginBottom="s20" disabled />

        <Button text="Outline" preset="outline" loading disabled />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
