import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PAGE_PATH } from './contents/pages';
import AuthPage from '#/page/Auth';
import AuthLayout from '#/page/Auth/AuthLayout';

const router = createBrowserRouter([
    {
        path: PAGE_PATH.home,
        element: <AuthPage />,
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PAGE_PATH.auth,
                element: <AuthPage />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
