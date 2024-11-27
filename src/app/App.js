import '../index.css';
import Feed from '../features/Feed/Feed';
import FilterDropdown from '../features/FilterDropdown/FilterDropdown';
import Footer from '../features/Footer/Footer';
import NavBar from '../features/NavBar/NavBar';

function App() {

// <<<<<<<< SEARCHBAR/SEARCH RESULTS >>>>>>>> //

  // SearchBar submission handler - written here as it does might trigger side effects
  // e.g. API calls/page navigation, but does not deal with state, thus is outside
  // of Redux scope. Note there's no test for this function - its role is limited
  // and just calls other functions. A unit test here would add little value compared
  // to an integration test covering the interaction between form submisison, state
  // updates, rendering search results etc. 
  function handleSearchBarSubmit(e) {
    e.preventDefault();
    fetchSearchResults();
    console.log('Search Results fetched');
  }; 

  async function fetchSearchResults() {
    console.log('success');
  };

  return (
    <div className="">
        <NavBar
        onSearchBarSubmit={handleSearchBarSubmit}
        />
        <FilterDropdown />
        <Feed />
        <Footer />
    </div>
  );
}

export default App;