import '../index.css';
import Feed from '../features/Feed/Feed';
import Fallback from '../features/Fallback/Fallback';
import FilterDropdown from '../features/FilterDropdown/FilterDropdown';
import Footer from '../features/Footer/Footer';
import NavBar from '../features/NavBar/NavBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFeed } from '../features/Feed/feedSlice';

// THUNKS/MIDDLEWARE

export const fetchSearchResults = createAsyncThunk(
  'feed/setFeed',
  async(query, thunkAPI) => {
   try { 
      const response = await fetch(`https://content.guardianapis.com/search?q=${query}&api-key=d53eea4a-037a-4040-900e-389d2a2166b9`);
      if(!response.ok) {
        return thunkAPI.rejectWithValue('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred');
    }
  }
);

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
    dispatch(setFeed([]));
    dispatch(fetchSearchResults(query));
    //console.log('Called fetchSearchResults');
  }; 

  return (
    <div className="">
        <NavBar
        onSearchBarSubmit={handleSearchBarSubmit}
        />
        <FilterDropdown />
        {query ? <Feed feed={feed}/> : <Fallback />}
        <Footer />
    </div>
  );
}

export default App;
