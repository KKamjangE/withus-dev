const GroupItem = ({ groupName }: { groupName: string }) => {
    return (
        <button className="btn size-16 btn-circle btn-primary text-2xl text-secondary-content">
            {groupName}
        </button>
    );
};

export default GroupItem;
