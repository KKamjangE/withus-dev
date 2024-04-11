import GroupList from '#/layout/SideMenu/GroupList';
import GroupMenu from '#/layout/SideMenu/GroupMenu';

const SideMenu = () => {
    return (
        <div className="fixed h-screen">
            <div className="flex h-10 w-screen items-center justify-between bg-base-300 px-2">
                <h1 className="text-base font-semibold">WithUS</h1>
            </div>
            <div className="flex">
                <GroupList />
                <GroupMenu />
            </div>
        </div>
    );
};

export default SideMenu;
