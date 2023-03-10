import Modal from '../../common/components/Modal';
import House1 from '../../assets/images/house1.jpg';
import House2 from '../../assets/images/house2.jpg';
import House3 from '../../assets/images/house3.jpg';
import House4 from '../../assets/images/house4.jpg';
import House5 from '../../assets/images/house5.jpg';
import { useState } from 'react';
import LocationIcon from '../../assets/icons/LocationIcon';
import ContactIcon from '../../assets/icons/ContactIcon';
import MailIcon from '../../assets/icons/MailIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';

const images = [House1, House2, House3, House4, House5];

type ListingDetailProps = {
    open: boolean;
    onClose: () => void;
};

const features = ['AC & Heating', 'Dishwasher', 'Balcony', 'Pool', 'Fitness Center'];

const ListingDetail = ({ open, onClose }: ListingDetailProps) => {
    const [activeImage, setActiveImage] = useState(0);
    return (
        <Modal size='lg' title='Listing Detail' open={open} onClose={onClose}>
            <div className='flex flex-col gap-2'>
                <div className='grid grid-cols-5 gap-4 h-[400px]'>
                    <div className='w-full bg-black h-[400px] col-span-5 md:col-span-3 '>
                        <img
                            className='w-full h-full object-contain'
                            src={images[activeImage] as string}
                            alt='House 1'
                        />
                    </div>
                    <div className='w-full gap-1 overflow-x-scroll pr-2 pb-2 grid grid-cols-2 col-span-5 md:col-span-2'>
                        {Array(6)
                            .fill(0)
                            .map((_, i) => (
                                <div className='bg-black min-w-[120px] h-full w-full cursor-pointer'>
                                    <img
                                        role='presentation'
                                        onClick={() =>
                                            setActiveImage(i > 4 ? i % images.length : i)
                                        }
                                        className='w-full h-full object-contain'
                                        src={
                                            (i > 4
                                                ? images[i % images.length]
                                                : images[i]) as string
                                        }
                                        alt='House 1'
                                    />
                                </div>
                            ))}
                    </div>
                </div>

                <div className='px-2'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full md:w-2/3 '>
                            <h1 className='text-3xl  mb-0'>Golden Gate Bridge</h1>
                            <h3 className='text-gray-500 flex gap-2 mb-4'>
                                <LocationIcon />
                                Chicago - Illinois, US 60622
                            </h3>

                            <div className='flex gap-2 flex-wrap mb-2'>
                                Price:{' '}
                                <h4 className='text-blue-600 font-bold '>
                                    $1530
                                    <span className='text-gray-400 font-normal'>/mo</span>
                                </h4>
                            </div>

                            <div className='flex gap-2 flex-wrap mb-2'>
                                Features:{' '}
                                {features.map((feature) => (
                                    <span className='flex items-center justify-center py-1 px-2 bg-blue-400 text-white text-sm rounded-md'>
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <p className='text-gray-700 leading-normal mb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
                                dapibus libero, ut dignissim mi. Duis ac vestibulum augue. Proin
                                euismod diam in erat feugiat, id tristique eros euismod.
                            </p>
                            <ul className='list-disc list-inside mb-4'>
                                <li>Bedrooms - 3</li>
                                <li>Bathrooms - 2</li>
                                <li>Size - 800 sqft</li>
                            </ul>
                        </div>
                        <div className='w-full md:w-1/3 md:pl-8'>
                            <h1 className='text-2xl mb-4'>Contact</h1>

                            <h3 className='text-gray-500 flex gap-2 mb-4'>
                                <ContactIcon />
                                Posted By Waheed Ahmed
                            </h3>

                            <p className='flex gap-2 text-gray-500 leading-normal mb-4'>
                                <MailIcon /> dmc4719@gmail.com
                            </p>

                            <p className='flex gap-2 text-gray-500 leading-normal mb-4'>
                                <PhoneIcon /> +880 172 172 1534
                            </p>
                            <form>
                                <div className='relative mb-2'>
                                    <textarea
                                        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='Enter text here...'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                                        <svg
                                            className='w-5 h-5 text-gray-400'
                                            fill='none'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path d='M6 18L18 6M6 6l12 12' />
                                        </svg>
                                    </div>
                                </div>
                            </form>
                            <button
                                type='button'
                                className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ListingDetail;
