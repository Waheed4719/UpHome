import House1 from '../../../assets/images/house1.jpg'

const ListingCard = () => {
    return (
        <div className="flex flex-col w-[99%]">
            <img className="rounded-md" src={House1 as '*.jpg'} alt="House" />

            <div className="flex justify-between py-2">
                <div className="flex flex-col justify-start items-start">
                    <h5 className="text-black-600 font-bold">19W Evergreen Ave</h5>
                    <p className="text-gray-400 font-regular text-sm">Chicago - Illinois, US 60622</p>
                </div>

                <div className="flex justify-start items-start">
                    <h4 className="text-blue-600 font-bold ">$1.320<span className="text-gray-400 font-normal">/mo</span></h4>
                </div>

            </div>
            <div className='h-[1px] w-full my-1 bg-gray-200' />
            <div className='flex gap-2 justify-between'>
                <div><p className='text-sm text-gray-400'>3 bedroom</p></div>
                <div><p className='text-sm text-gray-400'>2 bathroom</p></div>
                <div><p className='text-sm text-gray-400'>700 sqft</p></div>
            </div>
        </div>
    )
}

export default ListingCard