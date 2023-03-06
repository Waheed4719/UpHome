import { useState } from 'react';
import ListingCard from '../ListingCard';
import { homes } from '../../../data/dummy';
import ListingDetail from '../../ListingDetail';
import { AnimatePresence } from 'framer-motion';

const ListingColumn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='flex flex-1 flex-col gap-6 w-full items-start overflow-auto pr-2'>
            {homes.map((home) => (
                <ListingCard
                    key={Math.random()}
                    listing={home}
                    onListingSelect={() => setIsModalOpen(true)}
                />
            ))}
            <AnimatePresence>
                {isModalOpen && (
                    <ListingDetail open={isModalOpen} onClose={() => setIsModalOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ListingColumn;
