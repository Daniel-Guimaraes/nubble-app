import React from 'react';
import {
  Text,
  ActivityIndicator,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {buttonPresets} from './buttonPreset';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  text: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  text,
  loading,
  disabled,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      px="s20"
      height={50}
      borderRadius={'s16'}
      alignItems="center"
      justifyContent="center"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
