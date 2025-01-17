import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { store } from '../../app/store';

// <<<<<< SEARCHBAR INTEGRATION >>>>>>

// Test steps:
// 1. Render SearchBar in test container [x]
// 2. Simulate querying in the input field [x]
// 3. Trigger form submission [x]

// The test will use:
// RTL for rendering
// `Provider` for testing.
// MSW for a mocked API response.

describe("SearchBar and call to API", () => {
  it("renders SearchBar and recognises user query", () => {
    // ARRANGE
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBarInput = screen.getByPlaceholderText(/Scour the archives.../i);
    
    // ACT
    userEvent.type(searchBarInput, 'test');

    // ASSERT
    expect(searchBarInput.value).toBe('test');
  });
  
  it("calls the submission handler", () => {
    // ARRANGE
    const onSearchBarSubmit = jest.fn();
    render(
      <Provider store={store}>
        <SearchBar onSearchBarSubmit={onSearchBarSubmit}/>
      </Provider>
    );
    const searchBarInput = screen.getByPlaceholderText(/Scour the archives.../i);
    
    // ACT
    userEvent.type(searchBarInput, '{enter}');

    // ASSERT
    expect(onSearchBarSubmit).toHaveBeenCalled();
  });
});