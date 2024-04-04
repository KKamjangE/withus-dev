import Router from './Router';
import QueryProvider from '#/components/providers/QueryProvider.tsx';

const App = () => {
    return (
        <QueryProvider>
            <Router />
        </QueryProvider>
    );
};

export default App;
