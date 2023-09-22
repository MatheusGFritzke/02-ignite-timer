import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { liteTheme } from '../styles/themes/lite'

type ThemeDefaultType = typeof defaultTheme
type ThemeLiteType = typeof liteTheme

declare module 'styled-components' {
  export interface LiteTheme extends ThemeLiteType {}
  export interface DefaultTheme extends ThemeDefaultType {}
}
