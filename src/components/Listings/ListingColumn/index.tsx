import ListingCard from '../ListingCard';

const ListingColumn = () => {
    return (
        <div className='flex flex-1 flex-col gap-6 w-full items-start overflow-auto pr-2'>
            {Array(10)
                .fill(0)
                .map(() => (
                    <ListingCard key={Math.random()} />
                ))}
        </div>
    );
};

export default ListingColumn;
