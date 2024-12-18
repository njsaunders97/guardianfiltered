import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../features/SearchBar/searchBarSlice';
import feedReducer from '../features/Feed/feedSlice';

const store = configureStore({
    reducer:{
        searchBar: searchBarReducer,
        feed: feedReducer,
    }
});

export { store };