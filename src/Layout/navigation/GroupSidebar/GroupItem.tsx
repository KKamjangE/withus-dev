const GroupItem = ({ groupName }: { groupName: string }) => {
    return (
        <div className="p-3">
            <button className="btn btn-circle btn-primary text-xl text-secondary-content">
                {groupName}
            </button>
        </div>
    );
};

export default GroupItem;
