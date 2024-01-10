import { create } from 'zustand';

interface ThemeStore {
    theme: 'light' | 'dark';
    actions: {
        changeDarkTheme: () => void;
        changeLightTheme: () => void;
    };
}

const useThemeStore = create<ThemeStore>()((set) => ({
    theme: 'light',
    actions: {
        changeDarkTheme: () => set({ theme: 'dark' }),
        changeLightTheme: () => set({ theme: 'light' }),
    },
}));

export default useThemeStore;

export const useThemeActions = () => useThemeStore((state) => state.actions);
export const useThemeState = () => useThemeStore((state) => state.theme);
