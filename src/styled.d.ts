import 'styled-components';

interface Spacing {
    pixel: string,
    percent: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        border: string,
        colors: {
            primary: string,
            secondary: string,
            success: string,
            danger: string,
            background: string,
            surface: string,
            text: string,
            default: string
        },
        spacings: {
            xs: Spacing,
            sm: Spacing,
            md: Spacing,
            lg: Spacing,
            xl: Spacing,
            xxl: Spacing
        }
    }
};