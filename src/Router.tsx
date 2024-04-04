import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_PATH } from './contents/pages';
import AuthPage from '#/page/Auth';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PAGE_PATH.sign} element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
