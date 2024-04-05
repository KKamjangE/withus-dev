import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PAGE_PATH } from './contents/page';
import AuthPage from '#/page/Auth';
import AuthLayout from '#/page/Auth/AuthLayout';
import CreateAccountPage from '#/page/Auth/CreateAccount';
import HomePage from '#/page/Home';

const router = createBrowserRouter([
    {
        path: PAGE_PATH.home,
        element: <HomePage />,
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PAGE_PATH.auth,
                element: <AuthPage />,
            },
            {
                path: PAGE_PATH.createAccout,
                element: <CreateAccountPage />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
