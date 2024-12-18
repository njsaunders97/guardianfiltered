import '../index.css';
import Feed from '../features/Feed/Feed';
import FilterDropdown from '../features/FilterDropdown/FilterDropdown';
import Footer from '../features/Footer/Footer';
import NavBar from '../features/NavBar/NavBar';
import { setSearchQuery } from '../features/SearchBar/searchBarSlice';
import { setFeed } from '../features/Feed/feedSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handlers from '../mocks/handlers';

function App() {
  const query = useSelector(state => state.searchBar.query);
  const feed = useSelector(state => state.feed);
  const dispatch = useDispatch();

  // ensures that the most current query is registered in state
  useEffect(() => {
    console.log(`Current query: ${query}`);
  }, [query]);

// <<<<<<<< SEARCHBAR/SEARCH RESULTS >>>>>>>> //

  // SearchBar submission handler - written in main App as it might trigger side effects
  // e.g. API calls/page navigation, but does not deal with state, thus is outside
  // of Redux scope. Note there's only a test to see if this handler is called successfully 
  // as its role is limited to calling other functions. A unit test here would add little value compared
  // to an integration test covering the interaction between form submisison, state
  // updates, rendering search results etc. 
  function handleSearchBarSubmit(e) {
    e.preventDefault();
    fetchSearchResults(dispatch);
    //console.log('Called fetchSearchResults');
  }; 

  async function fetchSearchResults() {
    const apiKey = "d53eea4a-037a-4040-900e-389d2a2166b9";

    try {
      /* console.log(apiKey);
      console.log(query);
      console.log(feed); */

      const response = await fetch(
        `https://content.guardianapis.com/search?q=${query}&api-key=${apiKey}`, 
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      // console.log(feed);

      if(response.ok) {
        dispatch(setFeed([]));
        const data = await response.json();
        console.log('response data: ', data);
        dispatch(setFeed(data));
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
        <Feed feed={feed}/>
        <Footer />
    </div>
  );
}

export default App;