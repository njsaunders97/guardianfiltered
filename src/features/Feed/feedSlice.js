import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'feed',
    initialState: { feed: [] }, // initialising an empty object to ensure consistency with the incoming metadata
    reducers: {
        setFeed: (state, action) => {
            state.feed = action.payload;
        },
    },
});

export const { setFeed } = feedSlice.actions;
export default feedSlice.reducer;