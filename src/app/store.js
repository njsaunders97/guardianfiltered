import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../features/SearchBar/searchBarSlice';

const store = configureStore({
    reducer:{
        searchBarReducer: searchBarReducer,
    }
});

export default store;