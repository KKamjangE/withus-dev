import SideMenu from '#/layout/SideMenu';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="relative">
            <SideMenu />
            <div className="bg-neutral">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
