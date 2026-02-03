
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      text: string;
      textSecondary: string;
      primary: string;
      primaryHover: string;
      overlay: string;
      border: string;
    };
    fonts: {
      main: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
