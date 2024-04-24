import { create } from 'zustand';

interface GroupState {
    groupId: null | string;
    actions: { changeGroupId: (groupId: string) => void };
}

const useGroupStore = create<GroupState>((set) => ({
    groupId: null,
    actions: {
        changeGroupId: (groupId: string) => set({ groupId }),
    },
}));

export default useGroupStore;

export const useGroupActions = () => useGroupStore((state) => state.actions);
export const useGroupIdState = () => useGroupStore((state) => state.groupId);
