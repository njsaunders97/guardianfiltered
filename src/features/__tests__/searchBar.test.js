import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { fetchSearchResults } from '../../app/App';

// <<<<<< SEARCHBAR INTEGRATION >>>>>>

// Test steps:
// 1. Render SearchBar in test container [x]
// 2. Simulate querying in the input field [x]
// 3. Trigger form submission [x]
// 4. Verify fetch is called with the correct query, and that `feed` state updates
// 5. Check that articles are rendered properly in the feed according to mocked API data.
// 6. Handles errors with the fetch request appropriately.

// The test will use:
// RTL for rendering
// `Provider` for testing.
// MSW for a mocked API response.

describe("SearchBar query and call to API", () => {
  it("renders SearchBar, accepts user query, calls submission handler, API fetches", () => {
    // ARRANGE
    const onSearchBarSubmit = jest.fn();
    render(
      <Provider store={store}>
        <SearchBar onSearchBarSubmit={onSearchBarSubmit}/>
      </Provider>
    );
    const searchBarInput = screen.getByPlaceholderText(/Scour the archives.../);

    // ACT 
    userEvent.type(searchBarInput, 'test');
    userEvent.type(searchBarInput, '{enter}');
 
    // ASSERT
    expect(searchBarInput.value).toBe('test');
    expect(onSearchBarSubmit).toHaveBeenCalled();
  });
});