import ListingCard from '../ListingCard';
import { homes } from '../../../data/dummy';

const ListingColumn = () => {
    return (
        <div className='flex flex-1 flex-col gap-6 w-full items-start overflow-auto pr-2'>
            {homes.map((home) => (
                <ListingCard key={Math.random()} listing={home} />
            ))}
        </div>
    );
};

export default ListingColumn;
