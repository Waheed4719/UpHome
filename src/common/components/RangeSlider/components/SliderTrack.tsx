import { forwardRef, LegacyRef } from 'react';

type SliderTrackProps = {
    min: number;
    max: number;
};

const SliderTrack = forwardRef(({ min, max }: SliderTrackProps, ref) => {
    return (
        <div className='relative w-full'>
            <div className='slider__track absolute rounded-[3px] h-[5px] bg-[#ced4da] w-full z-[1]' />
            <div
                ref={ref as LegacyRef<HTMLDivElement> | null}
                className='slider__range absolute rounded-[3px] h-[5px] bg-[#9fe5e1] z-[1]'
            />
            <div className='absolute left-[6px] text-[12px] text-black mt-2'>{min} $</div>
            <div className='absolute right-[6px] text-[12px] text-black mt-2'>{max} $</div>
        </div>
    );
});

export default SliderTrack;
