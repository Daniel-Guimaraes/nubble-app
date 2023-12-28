import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface ButtonProps {
  text: string;
  loading?: boolean;
}

export function Button({text, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      height={50}
      paddingHorizontal="s20"
      borderRadius={'s16'}
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {text}
        </Text>
      )}
    </Box>
  );
}
