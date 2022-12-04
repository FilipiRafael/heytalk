import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      normalText: string;
      hoverText: string;
      placeholderText: string;
      boldText?: string;
      boldTextColored: string;
      backgroundColor: string;
      borderColor: string;
      cardBorderColor: string;
      iconsColor: string;
      buttonBackground: string;
      buttonBackgroundOnHover: string;
      buttonTextColor: string;
    },
  }
}