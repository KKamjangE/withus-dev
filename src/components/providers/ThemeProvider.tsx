import { DARK_THEME, LIGHT_THEME } from '#/components/styles/theme';
import { useThemeState } from '#/store/themeStore';
import { ThemeProvider as Theme } from '@emotion/react';
import { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const theme = useThemeState();
    return (
        <Theme theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}>
            {children}
        </Theme>
    );
};

export default ThemeProvider;
