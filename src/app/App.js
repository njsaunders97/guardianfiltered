import '../index.css';
import Feed from '../features/Feed/Feed';
import Fallback from '../features/Fallback/Fallback';
import Filters from '../features/Filters/Filters';
import Footer from '../features/Footer/Footer';
import NavBar from '../features/NavBar/NavBar';
import React, { useEffect, useState, useCallback } from 'react';
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
      return data.response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred');
    }
  }
);

export const fetchFilterResults = createAsyncThunk(
  'feed/setFeed',
  async(filters, thunkAPI) => {
   try { 
      const response = await fetch(`https://content.guardianapis.com/tags?query=${filters.join(',')}&api-key=d53eea4a-037a-4040-900e-389d2a2166b9`);
      if(!response.ok) {
        return thunkAPI.rejectWithValue('Failed to fetch data');
      }
      const data = await response.json();
      return data.response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred');
    }
  } 
);


function App() {
  const query = useSelector(state => state.searchBar.query);
  const feed = useSelector(state => state.feed);
  const filters = useSelector(state => state.filters.selectedFilters);
  const dispatch = useDispatch();
  const [ showDropdown, setShowDropdown ] = useState(false);
  const handleToggle = useCallback(() => setShowDropdown(prevShowDropdown => !prevShowDropdown),[]);

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
    if (query.length > 0) {
      dispatch(fetchSearchResults(query));
    } else {
      dispatch(setFeed([]));
    }
    console.log('Called fetchSearchResults');
    console.log(feed);
    console.log(filters);
  }; 

  return (
    <div className="">
        <NavBar
        onSearchBarSubmit={handleSearchBarSubmit}
        onToggle={handleToggle}
        />
        <Filters showDropdown={showDropdown} />
        {feed.feed.length > 0 ? // display feed is there is data present in feed
        <Feed 
        feed={feed}
        query={query}
        /> 
        : <Fallback />}
        <Footer />
    </div>
  );
}

export default App;
