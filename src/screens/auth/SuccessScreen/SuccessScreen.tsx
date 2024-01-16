import React from 'react';

import {RootStackParamList} from '@routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon, Text, Screen, Button} from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  const goBackToBegin = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>

      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>

      <Button onPress={goBackToBegin} text="Voltar ao início" mt="s40" />
    </Screen>
  );
}
