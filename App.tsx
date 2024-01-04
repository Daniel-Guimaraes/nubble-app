import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';
import {Box} from './src/components/Box/Box';
// import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{padding: 20}}>
        <Text preset="headingLarge">Hello word!!</Text>

        <Box flexDirection="row">
          <Icon name="eyeOff" size={30} />
          <Icon name="eyeOn" size={30} />
          <Icon name="arrowLeft" size={30} />
          <Icon name="arrowRight" size={30} />
          <Icon name="bell" size={30} />
          <Icon name="bellOn" size={30} />
          <Icon name="bookmark" size={30} />
          <Icon name="heart" size={30} />
          <Icon name="heartFill" size={30} />
          <Icon name="home" size={30} />
          <Icon name="homeFill" size={30} />
          <Icon name="message" size={30} />
        </Box>

        <Box flexDirection="row">
          <Icon name="bookmarkFill" size={30} />
          <Icon name="chat" size={30} />
          <Icon name="chatOn" size={30} />
          <Icon name="chevronRight" size={30} />
          <Icon name="comment" size={30} />
          <Icon name="flashOff" size={30} />
          <Icon name="flashOn" size={30} />
          <Icon name="newPost" size={30} />
          <Icon name="profile" size={30} />
          <Icon name="profileFill" size={30} />
          <Icon name="search" size={30} />
          <Icon name="trash" size={30} />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
