import { Outlet } from 'react-router-dom';
import GroupSidebar from '#/layout/navigation/GroupSidebar';

const MainLayout = () => {
    return (
        <div className="relative">
            <GroupSidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
