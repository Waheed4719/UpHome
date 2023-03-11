type FilterHeaderProps = {
    onClose: () => void;
};
const FilterHeader = ({ onClose }: FilterHeaderProps) => {
    return (
        <div className='flex justify-between max-w-[350px] w-full py-3  h-fit '>
            <h3 className='font-bold'>Filter</h3>
            <div className='flex gap-4'>
                <button type='button' className='hover:underline cursor-pointer'>
                    Clear all
                </button>
                <button type='button' onClick={onClose}>
                    (&times;)
                </button>
            </div>
        </div>
    );
};

export default FilterHeader;
