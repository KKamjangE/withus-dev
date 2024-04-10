import GroupSidebar from '#/Layout/navigation/GroupSidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="relative">
            <GroupSidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
