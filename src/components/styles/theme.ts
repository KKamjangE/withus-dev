import { Theme } from '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            darkBlue: string;
            mainOrange: string;
            lightOrange: string;
            darkOrange: string;
            white: string;
            black: string;
            gray: {
                100: string;
                200: string;
                400: string;
                700: string;
            };
        };
        fontSize: {
            small: string;
            medium: string;
            large: string;
        };
    }
}

export const LIGHT_THEME: Theme = {
    colors: {
        darkBlue: '#203246',
        mainOrange: '#F69A02',
        lightOrange: '#FEB500',
        darkOrange: '#F75601',
        white: '#ffffff',
        black: '#000000',
        gray: {
            100: '#f5f5f5',
            200: '#eeeeee',
            400: '#bdbdbd',
            700: '#616161',
        },
    },
    fontSize: {
        small: '16px',
        medium: '20px',
        large: '24px',
    },
};

export const DARK_THEME: Theme = {
    colors: {
        darkBlue: '#203246',
        mainOrange: '#F69A02',
        lightOrange: '#FEB500',
        darkOrange: '#F75601',
        white: '#ffffff',
        black: '#000000',
        gray: {
            100: '#f5f5f5',
            200: '#eeeeee',
            400: '#bdbdbd',
            700: '#616161',
        },
    },
    fontSize: {
        small: '16px',
        medium: '20px',
        large: '24px',
    },
};
