import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';

export function HomeHeader() {
  return (
    <Box {...$wrapper}>
      {/* <Box backgroundColor="carrotPrimaryLight" height={16} width={70} /> */}

      <SimpleLogo />

      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
