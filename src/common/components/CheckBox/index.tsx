type Props = {
    label: string;
    onChange?: (value: boolean, label: string) => void;
};

const CheckBox = ({ label, onChange }: Props) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.checked, label);
    };
    return (
        <div className='flex items-center mb-4'>
            <input
                id={`checkbox-${label}`}
                type='checkbox'
                onChange={handleCheckboxChange}
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded checked:bg-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label
                htmlFor={`checkbox-${label}`}
                className='ml-2 text-sm font-medium text-black flex flex-1'
            >
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
