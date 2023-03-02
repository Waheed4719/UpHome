import { useState, useEffect, useRef, useCallback } from 'react';

type RangeSliderMinMaxType = { min: number; max: number };

type RangeSliderProps = {
    onChange: ({ min, max }: RangeSliderMinMaxType) => void;
    min: number;
    max: number;
};

const RangeSlider = ({ min, max, onChange }: RangeSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement | null>(null);
    const maxValRef = useRef<HTMLInputElement | null>(null);
    const range = useRef<HTMLDivElement | null>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (!maxValRef.current) {
            return;
        }
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

        if (!range.current) {
            return;
        }
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className='relative w-full flex pb-8'>
            <input
                type='range'
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                }}
                className={`thumb z-[4] pointer-events-none absolute h-0 w-full outline-none ${
                    minVal > max - 100 && 'z-[5]'
                }`}
            />
            <input
                type='range'
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                }}
                className='thumb z-[4] pointer-events-none absolute h-0 w-full outline-none'
            />

            <div className='relative w-full'>
                <div className='slider__track absolute rounded-[3px] h-[5px] bg-[#ced4da] w-full z-[1]' />
                <div
                    ref={range}
                    className='slider__range absolute rounded-[3px] h-[5px] bg-[#9fe5e1] z-[1]'
                />
                <div className='absolute left-[6px] text-[12px] text-black mt-2'>{minVal}</div>
                <div className='absolute right-[6px] text-[12px] text-black mt-2'>{maxVal}</div>
            </div>
        </div>
    );
};

export default RangeSlider;
