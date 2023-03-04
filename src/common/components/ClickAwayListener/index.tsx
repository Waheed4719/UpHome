import React, { useRef, useEffect, FC } from 'react';

interface Props {
    onClickAway: () => void;
    children?: React.ReactNode;
}

const ClickAwayListener: FC<Props> = ({ children, onClickAway }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickAway = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickAway();
            }
        };

        document.addEventListener('mousedown', handleClickAway);
        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        };
    }, [onClickAway]);

    return (
        <div className='w-full' ref={ref}>
            {children}
        </div>
    );
};

export default ClickAwayListener;
