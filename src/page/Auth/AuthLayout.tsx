import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="max-w-screen-md mx-auto">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
