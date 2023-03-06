type FilterHeaderProps = {
    onClose: () => void;
};
const FilterHeader = ({ onClose }: FilterHeaderProps) => {
    return (
        <div className='flex justify-between max-w-[350px] w-full py-3  h-fit '>
            <h3 className='font-bold'>Filter</h3>
            <button type='button' onClick={onClose}>
                Clear all (&times;)
            </button>
        </div>
    );
};

export default FilterHeader;
