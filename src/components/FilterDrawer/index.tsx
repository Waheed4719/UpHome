import FilterHeader from "./FilterHeader";
import CheckBox from '../../common/components/CheckBox'

const typesOfPlaces = [
    "All", "Office", "Building", "Shop", "Apartment", "House"
]

const features = [
    "AC & Heating", "Clubhouse", "Dishwasher", "Spa", "Balcony", "Pool", "Fitness Center", "Valet Parking"
]

const styles = [
    "A-Frame", "Dome", "Cottage", "Spanish"
]

const FilterDrawer = () => {
    return <div className="flex flex-1 flex-col gap-4 max-w-[350px] items-start w-full border-r p-4" >
        <FilterHeader />
        <h3 className="text-gray-400 font-semibold text-[12px] mb-2">TYPE OF PLACE</h3>
        <div className="grid grid-cols-2 w-full" >
            {typesOfPlaces.map((placeType) => <CheckBox key={placeType} label={placeType} />)}
        </div>
        <h3 className="text-gray-400 font-semibold text-[12px]">PRICE RANGE</h3>
        <h3 className="text-gray-400 font-semibold text-[12px]">SIZE</h3>
        <h3 className="text-gray-400 font-semibold text-[12px]">FEATURES</h3>
        <div className="grid grid-cols-2 w-full" >
            {features.map((feature) => <CheckBox key={feature} label={feature} />)}
        </div>
        <h3 className="text-gray-400 font-semibold text-[12px]">STYLE</h3>
        <div className="grid grid-cols-2 w-full" >
            {styles.map((style) => <CheckBox key={style} label={style} />)}
        </div>
    </div>;
}

export default FilterDrawer;
