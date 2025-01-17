import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchResults } from '../../app/App';

const feedSlice = createSlice({
    name: 'feed',
    initialState: { feed: [], isLoading: false, hasError: false }, // initialising an empty array to ensure consistency with the incoming metadata
    reducers: {
        setFeed: (state, action) => {
            state.feed = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSearchResults.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.feed = action.payload;
            state.isLoading = false;
            state.hasError = false;
        })
        .addCase(fetchSearchResults.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        });
    },
});

export const { setFeed } = feedSlice.actions;
export default feedSlice.reducer;