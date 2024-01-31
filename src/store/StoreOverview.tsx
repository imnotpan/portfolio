import { create } from 'zustand';

interface OverviewStore {
    isFullScreenOverviewActive: boolean;
    mainTitle: string;
    mainDescription: string;
    tags: string[];
    mainImage: string;
    images: string[];
    redirectLink: string;
}

interface Action {
    setStateFullScreenOverview: (isActive: boolean) => void;
    setMainTitle: (title: string) => void;
    setRedirectLink: (title: string) => void;
    setDescription: (description: string) => void;
    setTags: (tags: string[]) => void;
    setMainImage: (image: string) => void;
    setImages: (images: string[]) => void;
}

export const useStoreOverview = create<OverviewStore & Action>((set) => ({
    isFullScreenOverviewActive: false,
    mainTitle: "",
    mainDescription: "",
    tags: [],
    mainImage: "",
    images: [],
    redirectLink: "",
    setStateFullScreenOverview: (isActive) => {
        set({ isFullScreenOverviewActive: isActive });
    },
    setRedirectLink: (url) => {
        set({ redirectLink: url });
    },
    setMainTitle: (title) => {
        set({ mainTitle: title });
    },
    setDescription: (description) => {
        set({ mainDescription: description });
    },
    setTags: (tg) => {
        set({ tags: tg });
    },
    setMainImage: (image) => {
        set({ mainImage: image });
    },
    setImages: (imgs) => {
        set({ images: imgs });
    },
}));