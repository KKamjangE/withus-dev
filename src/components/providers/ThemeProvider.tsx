import { MUI_THEME } from '#/styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <MuiThemeProvider theme={MUI_THEME}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
