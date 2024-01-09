import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';

import {Box} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s20"
          style={{marginTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <Box flexDirection="row" alignItems="center" mb="s24">
              <Icon name="arrowLeft" color="primary" />

              <Text preset="paragraphMedium" medium ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
