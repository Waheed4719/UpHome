import { useReducer, createContext, useMemo } from 'react';
import { homes } from '../data/dummy';
import { HomeType } from '../types';

type HomeSearchProviderProps = {
    children: React.ReactNode;
};

export type HomeSearchType = {
    homes: HomeType[];
    filteredHomes: HomeType[];
    filters: {
        minPrice: number;
        maxPrice: number;
        minBedrooms: number;
        maxBedrooms: number;
        minBathrooms: number;
        maxBathrooms: number;
        features: string[];
        style: string[];
        type: string[];
    };
};

export const HomeSearchInitialState: HomeSearchType = {
    homes,
    filteredHomes: homes,
    filters: {
        minPrice: 0,
        maxPrice: 5000,
        minBedrooms: 0,
        maxBedrooms: Number.POSITIVE_INFINITY,
        minBathrooms: 0,
        maxBathrooms: Number.POSITIVE_INFINITY,
        features: [],
        style: [],
        type: []
    }
};

export type HomeSearchActionType =
    | { type: 'SET_FILTERS'; payload: Partial<HomeSearchType['filters']> }
    | { type: 'SET_HOMES'; payload: HomeType[] };

export const HomeSearchContext = createContext<{
    state: HomeSearchType;
    dispatch: React.Dispatch<HomeSearchActionType>;
}>({
    state: HomeSearchInitialState,
    dispatch: () => null
});

export const HomeSearchReducer = (state: HomeSearchType, action: HomeSearchActionType) => {
    switch (action.type) {
        case 'SET_HOMES':
            return {
                ...state,
                filteredHomes: action.payload
            };
        case 'SET_FILTERS': {
            const updatedFilters = { ...state.filters, ...action.payload };
            return {
                ...state,
                filters: updatedFilters,
                filteredHomes: state.homes.filter((home) => {
                    const { features } = updatedFilters;
                    const { features: homeFeatures } = home;
                    if (features.length === 0) {
                        return true;
                    }
                    const isFeaturesIncluded = features.every((feature) =>
                        homeFeatures.includes(feature)
                    );
                    return isFeaturesIncluded;
                })
            };
        }
        default:
            return state;
    }
};

export const HomeSearchProvider = ({ children }: HomeSearchProviderProps) => {
    const [state, dispatch] = useReducer(HomeSearchReducer, HomeSearchInitialState);
    const contextValue = { state, dispatch };
    const memoizedContextValue = useMemo(() => contextValue, [state]);
    console.log(state, memoizedContextValue);
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <HomeSearchContext.Provider value={memoizedContextValue}>
            {children}
        </HomeSearchContext.Provider>
    );
};
