import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from '#/styles/GlobalStyles.tsx';
import ThemeProvider from '#/components/providers/ThemeProvider.tsx';
import QueryProvider from '#/components/providers/QueryProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryProvider>
            <ThemeProvider>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </QueryProvider>
    </React.StrictMode>,
);
