import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PAGE_PATH } from '#/contents/page';
import AuthLayout from '#/layout/AuthLayout';
import MainLayout from '#/layout/MainLayout';
import AuthPage from '#/page/Auth';
import CreateAccountPage from '#/page/Auth/CreateAccount';
import FeedPage from '#/page/Feed';
import GroupConnectionPage from '#/page/group/GroupConnection';
import HomePage from '#/page/Home';

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
            { path: PAGE_PATH.feed, element: <FeedPage /> },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
