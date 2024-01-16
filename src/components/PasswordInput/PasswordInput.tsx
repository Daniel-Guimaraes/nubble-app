import React, {useState} from 'react';
import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(prev => !prev);
  };

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      rightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
          color="gray2"
        />
      }
    />
  );
}
