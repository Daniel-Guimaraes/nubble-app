import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {Box, BoxProps, $fontFamily, $fontSizes, Text} from '@components';
import {useAppTheme} from '@hooks';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  rightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    padding: 's16',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>

        <Box {...$textInputContainer} flexDirection="row">
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />

          {rightComponent && (
            <Box justifyContent="center" ml="s16">
              {rightComponent}
            </Box>
          )}
        </Box>

        {errorMessage && (
          <Text preset="paragraphSmall" color="error" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
