type Props = {
    children: React.ReactNode;
    onClose: () => void;
};

const InfoWindowComponent = ({ children, onClose }: Props) => {
    const handleInfoWindowClose = () => {
        onClose();
    };
    return (
        <div className='animated-infowindow relative'>
            {' '}
            <button
                className='text-gray-600 text-2xl rounded-full shadow-md flex items-center justify-center absolute top-[15px] bg-white p-2 h-6 w-6 right-[20px] font-semibold'
                type='button'
                onClick={handleInfoWindowClose}
            >
                &times;
            </button>
            {children}
        </div>
    );
};

export default InfoWindowComponent;
