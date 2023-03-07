import { useEffect, useContext, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FilterDrawerContext } from '../../contexts/FilterDrawerContext';
import FilterHeader from './FilterHeader';
import CheckBox from '../../common/components/CheckBox';
import RangeSlider from '../../common/components/RangeSlider';
import { HomeSearchType, HomeSearchContext } from '../../contexts/HomeSearchContext';

const typesOfPlaces = ['All', 'Office', 'Building', 'Shop', 'Apartment', 'House'];

const featureValues = [
    'AC & Heating',
    'Clubhouse',
    'Dishwasher',
    'Spa',
    'Balcony',
    'Pool',
    'Fitness Center',
    'Valet Parking'
];

const styles = ['A-Frame', 'Dome', 'Cottage', 'Spanish'];

const variants = {
    active: { x: 0 },
    inactive: { x: '-100%' }
};

const FilterDrawer = () => {
    const controls = useAnimation();
    const { isDrawerOpen: isActive, toggleDrawer } = useContext(FilterDrawerContext);
    useEffect(() => {
        controls.start(isActive ? 'active' : 'inactive').catch((err) => console.error(err));
    }, [isActive, controls]);
    const { state, dispatch } = useContext(HomeSearchContext);
    const { filters } = state;
    const { features, minPrice, maxPrice } = filters;

    const setFilters = (payload: Partial<HomeSearchType['filters']>) => {
        dispatch({
            type: 'SET_FILTERS',
            payload: {
                ...payload
            }
        });
    };

    const handleFeaturesChange = (val: boolean, label: string) => {
        setFilters({
            features: val ? [...features, label] : features.filter((feature) => feature !== label)
        });
    };

    const handlePriceChange = ({ min, max }: { min: number; max: number }) => {
        if (minPrice !== min || maxPrice !== max) {
            setFilters({
                minPrice: min,
                maxPrice: max
            });
        }
    };

    return (
        <motion.div
            animate={controls}
            variants={variants}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className='flex flex-1 flex-col gap-4 max-w-[350px] items-start w-full border-r p-4 absolute h-[calc(100vh-62px)] left-0 z-50 bg-white'
        >
            <FilterHeader onClose={toggleDrawer} />
            <h3 className='text-gray-400 font-semibold text-[12px] mb-2'>TYPE OF PLACE</h3>
            <div className='grid grid-cols-2 w-full'>
                {typesOfPlaces.map((placeType) => (
                    <CheckBox key={placeType} label={placeType} />
                ))}
            </div>

            <div className='w-full gap-2 justify-start items-start flex flex-col'>
                <h3 className='text-gray-400 font-semibold text-[12px]'>PRICE RANGE</h3>
                <RangeSlider min={0} max={5000} onChange={handlePriceChange} />
            </div>
            <div className='w-full justify-start items-start flex flex-col'>
                <h3 className='text-gray-400 font-semibold text-[12px]'>SIZE</h3>
                <div className='flex gap-4 justify-between w-full py-2'>
                    <div className='flex h-10 flex-1 justify-between items-center border border-[#ddd] rounded-md p-2'>
                        <span className='flex flex-1'>Min</span>
                        <input className='w-10' placeholder='sq ft' />
                    </div>
                    <div className='flex h-10 flex-1 justify-between items-center border border-[#ddd] rounded-md p-2'>
                        <span className='flex flex-1'>Max</span>
                        <input className='w-10' placeholder='sq ft' />
                    </div>
                </div>
            </div>

            <h3 className='text-gray-400 font-semibold text-[12px]'>FEATURES</h3>
            <div className='grid grid-cols-2 w-full'>
                {featureValues.map((feature) => (
                    <CheckBox key={feature} onChange={handleFeaturesChange} label={feature} />
                ))}
            </div>
            <h3 className='text-gray-400 font-semibold text-[12px]'>STYLE</h3>
            <div className='grid grid-cols-2 w-full'>
                {styles.map((style) => (
                    <CheckBox key={style} label={style} />
                ))}
            </div>
        </motion.div>
    );
};

export default FilterDrawer;
