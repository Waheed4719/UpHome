import ListingSearch from './ListingSearch'
import ListingColumn from './ListingColumn'


const index = () => {
    return (
        <div className="flex flex-col max-h-[calc(100vh-62px)] w-[420px] p-4 gap-4">
            <ListingSearch />
            <ListingColumn />
        </div>
    )
}

export default index