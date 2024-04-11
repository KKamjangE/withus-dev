import GroupList from '#/layout/SideMenu/GroupList';
import GroupMenu from '#/layout/SideMenu/GroupMenu';

const SideMenu = () => {
    return (
        <>
            <div className="fixed mt-10 flex">
                <GroupList />
                <GroupMenu />
            </div>
            <div className="fixed flex h-10 w-screen items-center justify-between bg-base-300 px-2">
                <h1 className="text-base font-semibold">WithUS</h1>
            </div>
        </>
    );
};

export default SideMenu;
