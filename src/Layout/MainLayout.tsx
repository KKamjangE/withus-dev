import SideMenu from '#/layout/SideMenu';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <SideMenu />
            <div className="fixed flex h-10 w-screen items-center justify-between bg-base-300 px-2">
                <h1 className="text-base font-semibold">WithUS</h1>
            </div>
            <div className="ml-[300px] h-full bg-neutral">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
