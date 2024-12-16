import '../index.css';
import Feed from '../features/Feed/Feed';
import FilterDropdown from '../features/FilterDropdown/FilterDropdown';
import Footer from '../features/Footer/Footer';
import NavBar from '../features/NavBar/NavBar';
import { setSearchQuery } from '../features/SearchBar/searchBarSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const query = useSelector(state => state.query);

// <<<<<<<< SEARCHBAR/SEARCH RESULTS >>>>>>>> //

  // SearchBar submission handler - written in main App as it might trigger side effects
  // e.g. API calls/page navigation, but does not deal with state, thus is outside
  // of Redux scope. Note there's only a test to see if this handler is called successfully 
  // as its role is limited to calling other functions. A unit test here would add little value compared
  // to an integration test covering the interaction between form submisison, state
  // updates, rendering search results etc. 
  function handleSearchBarSubmit(e) {
    e.preventDefault();
    fetchSearchResults();
    console.log('Called fetchSearchResults');
  }; 

   async function fetchSearchResults(e) {
    const apiKey = "";
   // const dispatch = useDispatch();

    try {
      console.log(apiKey);
      console.log(query);

      const response = await fetch(
        `https://content.guardianapis.com/search?q=${query}`, 
        {
          headers: {
            'Authorisation': `${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if(response.ok) {
        const data = await response.json();
        console.log('response data: ', data);
       // dispatch(setSearchResults(data));
      } else {
        console.error('There was an error fetching the search results: ', response.status);
      }

    } catch (error) {
      console.error('Network/fetch error: ', error);
    }
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