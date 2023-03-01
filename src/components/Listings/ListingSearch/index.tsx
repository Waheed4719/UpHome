const index = () => {
    return (
        <div className="flex w-full border rounded-md overflow-hidden">
            <div className="flex flex-1 items-center px-4 ">
                <input className="outline-none" type="text" placeholder="Search..." />
            </div>
            <button type='button' className="flex w-[40px] h-[40px] items-center justify-center bg-blue-500 text-white">x</button>
        </div>
    )
}

export default index