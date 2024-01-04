import {useTheme} from '@shopify/restyle';
import {ThemeType} from '../theme/theme';

export function useAppTheme() {
  return useTheme<ThemeType>();
}
