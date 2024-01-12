import { createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

export const darkBlue = '#203246';

export const small = '14px';
export const normal = '16px';
export const large = '24px';
export const h2 = '32px';
export const h1 = '48px';

export const MUI_THEME = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: deepOrange[700],
                    ':hover': { backgroundColor: deepOrange[500] },
                },
            },
        },
    },
});
