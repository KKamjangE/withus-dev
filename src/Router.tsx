import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_PATH } from './contents/pages';
import Sign from '#/components/signContainer';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PAGE_PATH.sign} element={<Sign />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
