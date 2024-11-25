import '../index.css';
import NavBar from '../features/NavBar';
import Feed from '../features/Feed';
import FilterDropdown from '../features/FilterDropdown';

function App() {
  return (
    <div className="">
        <NavBar />
        <FilterDropdown />
        <Feed />
    </div>
  );
}

export default App;
