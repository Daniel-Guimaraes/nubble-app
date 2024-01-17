import {useTheme} from '@shopify/restyle';

import {ThemeType} from '@theme';

export function useAppTheme() {
  return useTheme<ThemeType>();
}
