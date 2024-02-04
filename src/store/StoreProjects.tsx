import { create } from 'zustand';

interface OverviewStore {
    dragged: boolean,
    currentCover: number
}

interface Action {
    setDragged: (isDragged: boolean) => void;
    setCurrentCover: (currentCover: number) => void;
}

export const useStoreProjects = create<OverviewStore & Action>((set) => ({
    dragged: true,
    currentCover: 0,
    setCurrentCover: (cover) => {
        set({currentCover: cover})
    },
    setDragged: (isDragged) => {
        set({ dragged: isDragged });
    },
    
}));