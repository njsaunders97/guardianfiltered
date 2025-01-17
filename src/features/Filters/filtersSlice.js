import { createSlice } from "@reduxjs/toolkit";

// note that the code can be a bit confusing here because we use the .filter
// function, as well as referencing array elements which are referred to as 
// filters

const filtersSlice = createSlice({
    name: 'filters',
    initialState: { selectedFilters: [] },
    reducers: {
        addFilter: (state, action) => {
            if(!state.selectedFilters.includes(action.payload)) {
                state.selectedFilters.push(action.payload)
            } 
        },
        removeFilter: (state, action) => {
            state.selectedFilters = state.selectedFilters.filter(
                (filter => filter !== action.payload)
            )
        },
    }
});

export const { addFilter, removeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;