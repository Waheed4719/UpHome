import { createContext, useCallback, useState } from 'react';

type FilterDrawerContextType = {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
};
type FilterDrawerProviderProps = {
    children: React.ReactNode;
};
export const FilterDrawerContext = createContext<FilterDrawerContextType>({
    isDrawerOpen: false,
    toggleDrawer: () => {}
});

export const FilterDrawerProvider = ({ children }: FilterDrawerProviderProps) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawerOpen((prevDrawerState) => {
            return !prevDrawerState;
        });
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <FilterDrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </FilterDrawerContext.Provider>
    );
};
