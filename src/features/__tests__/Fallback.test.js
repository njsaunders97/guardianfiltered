import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Fallback from '../Fallback/Fallback';
import SearchBar from '../SearchBar/SearchBar';
import feedSlice from '../Feed/feedSlice';
import searchBarSlice from '../SearchBar/searchBarSlice';
import { store } from '../../app/store';


describe("Fallback", () => {
    it("renders upon page load with empty query", () => {
        // ARRANGE
        const initialState = {
            searchBar: { query: ''},
            feed: { feed: [], isLoading: false, hasError: false},
        };
        const mockStore = configureStore({
            reducer: {
                searchBar: searchBarSlice,
                feed: feedSlice,
            },
            initialState,
        });
        // above configures a mockStore with an initialState
        render(
            <Provider store={mockStore}> 
                <Fallback />
            </Provider>
        );

        // ASSERT
        expect(screen.getByText(/Tailor your Guardian feed to your taste via search terms or category filters above./i)).toBeInTheDocument();
        // note that .toBeInTheDocument only returns true if the inspected element is present in the rendered DOM
    });

    it("renders if the user actively clears the input field", () => {
        // ARRANGE
        render(
            <Provider store={store}>
                <SearchBar />
                <Fallback />
            </Provider>
        );
        const searchBarInput = screen.getByPlaceholderText(/Scour the archives.../i);

        // ACT
        userEvent.clear(searchBarInput);

        // ASSERT
        expect(screen.getByText(/Tailor your Guardian feed to your taste via search terms or category filters above./i)).toBeInTheDocument();
    })
});