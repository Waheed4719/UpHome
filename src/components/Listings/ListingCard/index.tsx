import { HomeType } from '../../../types';

type ListingCardProps = {
    listing: HomeType;
    onListingSelect?: () => void;
};

const ListingCard = ({ listing, onListingSelect }: ListingCardProps) => {
    const handleListingSelect = () => {
        onListingSelect && onListingSelect();
    };
    return (
        <div
            role='button'
            className='flex flex-col w-[99%]'
            tabIndex={0}
            onKeyDown={handleListingSelect}
            onClick={handleListingSelect}
        >
            <img
                className='rounded-md sm:w-full md:w-[370px] h-[220px] object-cover object-center max-w-full'
                src={listing.url}
                alt='House'
            />

            <div className='flex justify-between py-2'>
                <div className='flex flex-col justify-start items-start'>
                    <h5 className='text-black-600 font-bold'>{listing.name}</h5>
                    <p className='text-gray-400 font-regular text-sm'>
                        Chicago - Illinois, US 60622
                    </p>
                </div>

                <div className='flex justify-start items-start'>
                    <h4 className='text-blue-600 font-bold '>
                        ${listing.price}
                        <span className='text-gray-400 font-normal'>/mo</span>
                    </h4>
                </div>
            </div>
            <div className='h-[1px] w-full my-1 bg-gray-200' />
            <div className='flex gap-2 justify-between'>
                <div>
                    <p className='text-sm text-gray-400'>{listing.bedrooms} bedroom</p>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>{listing.bathrooms} bathroom</p>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>{listing.sqft} sqft</p>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
