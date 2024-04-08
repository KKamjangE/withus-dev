import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="max-w-screen-sm mx-auto py-10">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
