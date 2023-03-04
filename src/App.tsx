import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import GoogleMap from './components/GoogleMap';
import FilterDrawer from './components/FilterDrawer';
import Listings from './components/Listings';
import { FilterDrawerContext } from './contexts/FilterDrawerContext';

const App = () => {
    const { isDrawerOpen: isActive, toggleDrawer } = useContext(FilterDrawerContext);
    return (
        <AnimatePresence>
            <div className='App'>
                <Navbar />
                <div className='flex'>
                    <FilterDrawer />
                    <motion.div
                        className={`flex w-full ${
                            isActive ? 'ml-[350px]' : 'ml-0'
                        } duration-500 ease-in-out transition-[margin]`}
                    >
                        <Listings />
                        <GoogleMap />
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default App;
