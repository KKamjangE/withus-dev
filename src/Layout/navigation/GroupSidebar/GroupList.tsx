import GroupItem from '#/layout/navigation/GroupSidebar/GroupItem';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';

const GroupList = () => {
    const groupList = [
        { groupName: 'A' },
        { groupName: 'B' },
        { groupName: 'C' },
    ];
    return (
        <div className="flex h-screen flex-col items-center gap-10 bg-neutral">
            <SquaresPlusIcon className="size-20 p-3" />
            <div>
                {groupList.map((item, index) => (
                    <GroupItem key={index} groupName={item.groupName} />
                ))}
            </div>
            <div className="mt-auto">추가</div>
        </div>
    );
};

export default GroupList;
