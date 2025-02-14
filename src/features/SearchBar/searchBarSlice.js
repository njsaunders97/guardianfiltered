import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {},
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

export const { setSearchQuery } = searchBarSlice.actions;
export default searchBarSlice.reducer;