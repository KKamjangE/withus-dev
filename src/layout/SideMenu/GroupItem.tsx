import useGroupStore from '#/store/useGroupStore';

const GroupItem = ({
    groupItem,
}: {
    groupItem: { groupName: string; id: string };
}) => {
    const {
        groupId,
        actions: { changeGroupId },
    } = useGroupStore();
    const handleClickGroupItem = () => {
        changeGroupId(groupItem.id);
    };
    return (
        <button
            onClick={handleClickGroupItem}
            className={`btn btn-square btn-primary size-12 text-2xl text-secondary-content  ${
                groupId === groupItem.id &&
                'ring-2 ring-white ring-offset-2 ring-offset-base-300'
            }`}
        >
            {groupItem.groupName}
        </button>
    );
};

export default GroupItem;
