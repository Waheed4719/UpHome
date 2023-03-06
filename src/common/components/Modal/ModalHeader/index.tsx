type ModalHeaderProps = {
    title: string;
    onClose: () => void;
};
const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
    return (
        <div className='h-[50px] w-full px-4 py-3 flex justify-between items-center border-b-[1px] border-[#ddd]'>
            <div>{title}</div>
            <div>
                <button
                    type='button'
                    onClick={onClose}
                    className='text-2xl bg-gray-200 hover:bg-gray-300 h-8 w-8 rounded-full'
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ModalHeader;
