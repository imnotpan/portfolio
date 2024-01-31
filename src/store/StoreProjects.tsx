import { create } from 'zustand';

interface OverviewStore {
    dragged: boolean
}

interface Action {
    setDragged: (isDragged: boolean) => void;
}

export const useStoreProjects = create<OverviewStore & Action>((set) => ({
    dragged: true,
    setDragged: (isDragged) => {
        set({ dragged: isDragged });
    },
}));