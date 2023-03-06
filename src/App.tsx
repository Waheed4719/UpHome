import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import GoogleMap from './components/GoogleMap';
import FilterDrawer from './components/FilterDrawer';
import Listings from './components/Listings';
import { FilterDrawerContext } from './contexts/FilterDrawerContext';
import ListingDetail from './components/ListingDetail';

const App = () => {
    const { isDrawerOpen: isActive } = useContext(FilterDrawerContext);
    return (
        <div className='App'>
            <Navbar />
            <div className='flex'>
                <FilterDrawer />
                <div
                    className={`flex w-full ${
                        isActive ? 'ml-[350px]' : 'ml-0'
                    } duration-500 ease-in-out transition-[margin]`}
                >
                    <Listings />
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
};

export default App;
