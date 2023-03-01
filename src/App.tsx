import "./App.css";
import Navbar from "./components/Navbar";
import GoogleMap from './components/GoogleMap'
import FilterDrawer from "./components/FilterDrawer";
import Listings from "./components/Listings";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <FilterDrawer />
        <Listings />
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
