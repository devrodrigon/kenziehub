import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryFocus: string;
      primaryNegative: string;
    };

    grey: {
      4: string;
      3: string;
      2: string;
      1: string;
      0: string;
    };

    feedback: {
      success: string;
      negative: string;
    };
  }
}
