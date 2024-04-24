import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PAGE_PATH } from '#/contents/page';
import AuthLayout from '#/layout/AuthLayout';
import MainLayout from '#/layout/MainLayout';
import AuthPage from '#/page/Auth';
import HomePage from '#/page/Home';
import CreateAccountPage from '#/page/Auth/CreateAccount';
import GroupConnectionPage from '#/page/group/GroupConnection';

const router = createBrowserRouter([
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
            {
                path: PAGE_PATH.groupConnection,
                element: <GroupConnectionPage />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: PAGE_PATH.home,
                element: <HomePage />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
