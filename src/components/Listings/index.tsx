import { useContext } from 'react';
import { FilterDrawerContext } from '../../contexts/FilterDrawerContext';
import ListingSearch from './ListingSearch';
import ListingColumn from './ListingColumn';

const Listings = () => {
    const { toggleDrawer } = useContext(FilterDrawerContext);
    return (
        <div className='flex flex-col max-h-[calc(100vh-62px)] w-[420px] p-4 gap-4'>
            <div className='flex gap-1'>
                <ListingSearch />
                <button
                    type='button'
                    className='bg-blue-500 text-white ml-auto px-4 py-2 rounded-sm hover:bg-blue-600'
                    onClick={toggleDrawer}
                >
                    Filter
                </button>
            </div>
            <ListingColumn />
        </div>
    );
};

export default Listings;
