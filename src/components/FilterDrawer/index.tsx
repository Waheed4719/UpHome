import FilterHeader from './FilterHeader';
import CheckBox from '../../common/components/CheckBox';
import RangeSlider from '../../common/components/RangeSlider';

const typesOfPlaces = ['All', 'Office', 'Building', 'Shop', 'Apartment', 'House'];

const features = [
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

const FilterDrawer = () => {
    return (
        <div className='flex flex-1 flex-col gap-4 max-w-[350px] items-start w-full border-r p-4'>
            <FilterHeader />
            <h3 className='text-gray-400 font-semibold text-[12px] mb-2'>TYPE OF PLACE</h3>
            <div className='grid grid-cols-2 w-full'>
                {typesOfPlaces.map((placeType) => (
                    <CheckBox key={placeType} label={placeType} />
                ))}
            </div>

            <div className='w-full gap-2 justify-start items-start flex flex-col'>
                <h3 className='text-gray-400 font-semibold text-[12px]'>PRICE RANGE</h3>
                <RangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
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
                {features.map((feature) => (
                    <CheckBox key={feature} label={feature} />
                ))}
            </div>
            <h3 className='text-gray-400 font-semibold text-[12px]'>STYLE</h3>
            <div className='grid grid-cols-2 w-full'>
                {styles.map((style) => (
                    <CheckBox key={style} label={style} />
                ))}
            </div>
        </div>
    );
};

export default FilterDrawer;
