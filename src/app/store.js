import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../features/SearchBar/searchBarSlice';
import feedReducer from '../features/Feed/feedSlice';
import filtersReducer from '../features/Filters/filtersSlice';

const store = configureStore({
    reducer:{
        searchBar: searchBarReducer,
        feed: feedReducer,
        filters: filtersReducer,
    }
});

export { store };