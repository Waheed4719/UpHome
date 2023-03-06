import React from 'react';

type ModalContentProps = {
    children?: React.ReactNode;
};

const ModalContent = ({ children }: ModalContentProps) => {
    return (
        <div className='px-4 py-3'>
            {children ?? (
                <div className='h-[80px] flex items-center justify-center'>
                    <h4 className='text-center text-gray-400'>No Content Available</h4>
                </div>
            )}
        </div>
    );
};

export default ModalContent;
