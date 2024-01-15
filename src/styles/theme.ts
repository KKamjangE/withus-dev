import { createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Palette {
        google: Palette['primary'];
        orange: Palette['primary'];
    }

    interface PaletteOptions {
        google?: PaletteOptions['primary'];
        orange?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/button' {
    interface ButtonPropsColorOverrides {
        google: true;
        orange: true;
    }
}

export const darkBlue = '#203246';

export const small = '14px';
export const normal = '18px';
export const large = '24px';
export const h2 = '32px';
export const h1 = '48px';

export const MUI_THEME = createTheme({
    palette: {
        orange: {
            main: deepOrange[700],
            light: deepOrange[500],
            dark: deepOrange[500],
            contrastText: '#ffffff',
        },
        google: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#ffffff',
            contrastText: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontsize: normal,
                },
            },
        },
    },
    typography: {
        fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
    },
});
