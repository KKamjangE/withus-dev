import QueryProvider from '#/providers/QueryProvider';

import Router from './Router';

const App = () => {
    return (
        <QueryProvider>
            <Router />
        </QueryProvider>
    );
};

export default App;
