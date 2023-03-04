import GooglePlacesAutocomplete from '../../GooglePlaces/Input';

const index = () => {
    return (
        <div className='flex w-full border rounded-md'>
            <div className='flex flex-1 items-center h-[40px]'>
                <GooglePlacesAutocomplete />
            </div>
            <button
                type='button'
                className='flex w-[40px] h-[40px] items-center justify-center bg-blue-500 text-white'
            >
                x
            </button>
        </div>
    );
};

export default index;
