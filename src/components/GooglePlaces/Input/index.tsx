import { useState, useEffect, useRef } from 'react';
import ClickAwayListener from '../../../common/components/ClickAwayListener';

const GooglePlacesAutocomplete = () => {
    const [text, setText] = useState('');
    const [inputText, setInputText] = useState('');
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [dropdown, setDropdown] = useState(false);
    const suggestionsRef = useRef<HTMLUListElement | null>(null);
    const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
    const geocoder = useRef<google.maps.Geocoder | null>(null);
    const getMatches = async () => {
        return new Promise((resolve, reject) => {
            if (!text) {
                // eslint-disable-next-line no-promise-executor-return
                return reject(new Error('Need valid text input'));
            }

            if (typeof window === 'undefined') {
                // eslint-disable-next-line no-promise-executor-return
                return reject(new Error('Need valid window object'));
            }

            try {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                new window.google.maps.places.AutocompleteService().getPlacePredictions(
                    {
                        input: text,
                        types: ['address']
                    },
                    resolve
                );
            } catch (e) {
                reject(e);
            }
        });
    };

    const doQuery = async () => {
        const results = JSON.parse(JSON.stringify(await getMatches()));
        setSuggestions(results.map((result: any) => result));
        if (results.length > 0) {
            setDropdown(true);
        }
    };

    useEffect(() => {
        if (!geocoder.current && window.google) {
            geocoder.current = new window.google.maps.Geocoder();
        }

        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }
    }, []);

    useEffect(() => {
        if (text) {
            doQuery();
        }
    }, [text]);

    const handleClickAway = () => {
        setDropdown(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='flex flex-col items-start w-full relative' role='button'>
                <input
                    className='h-[100%] px-4 outline-none w-full'
                    type='text'
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                        setText(e.target.value);
                    }}
                    onFocus={() => {
                        setDropdown(true);
                    }}
                    placeholder='Search...'
                />
                {suggestions.length > 0 && text && dropdown && (
                    <ul
                        ref={suggestionsRef}
                        id='suggestions_list'
                        className='absolute top-[40px] w-full max-w-full bg-white'
                        style={{ boxShadow: '0px 2px 6px rgb(0 0 0 / 20%)' }}
                    >
                        {suggestions.map((suggestion) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                            <li
                                className=' text-ellipsis overflow-hidden text-left px-2 text-md w-full border-b-[1px] border-solid border-l-gray-300 py-2 hover:bg-gray-100 cursor-pointer'
                                key={suggestion.description}
                                onClick={(e) => {
                                    console.log('reached here 2');
                                    e.stopPropagation();
                                    setDropdown(false);
                                    console.log(suggestion);
                                    setInputText(suggestion.description);
                                }}
                            >
                                {suggestion.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default GooglePlacesAutocomplete;
