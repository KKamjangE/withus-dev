import GroupItem from '#/Layout/navigation/GroupSidebar/GroupItem';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';

const GroupList = () => {
    const groupList = [
        { groupName: 'A' },
        { groupName: 'B' },
        { groupName: 'C' },
    ];
    return (
        <div className="flex h-screen flex-col items-center bg-base-300 justify-between">
            <h1 className='text-xl font-semibold p-3'>WidthUS</h1>
            <span className='divider px-3'></span>
            <div className='grow flex flex-col gap-6 p-3'>
                {groupList.map((item, index) => (
                    <GroupItem key={index} groupName={item.groupName} />
                ))}
            </div>
            <div className='p-3'>추가</div>
        </div>
    );
};

export default GroupList;
