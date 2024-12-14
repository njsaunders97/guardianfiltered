import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../app/store';

// Rendering SearchBar

describe("SearchBar rendering", () => {
  it('renders the SearchBar component', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText(/scour the archives.../i);
    expect(searchInput).toBeInTheDocument();
  });
});

// User input and search submission

describe("SearchBar user input changes and submission completes", () => {
  it('updates the SearchBar placeholder value according to user input', () => {
    // ARRANGE
    // Renders SearchBar so it has something to test
    // Finds the targeted element via this particular matcher below
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBarInput = screen.getByPlaceholderText(/scour the archives.../i);

    // ACT
    // Fires a user typing event, typing the value 'test' into the target (searchBarInput) 
    userEvent.type(searchBarInput, 'test');

    // ASSERT
    // Expects the value of that searchBarInput to then become 'test'
    expect(searchBarInput.value).toBe('test');

  });

  it('calls the submission handler when a user submits the form via Enter', () => {
    // ARRANGE
    const onSearchBarSubmit = jest.fn();
    render(
      <Provider store={store}>
        <SearchBar onSearchBarSubmit={onSearchBarSubmit} />
      </Provider>
    );
    const searchBarInput = screen.getByPlaceholderText(/scour the archives.../i);
    
    // ACT
    userEvent.type(searchBarInput, '{enter}');

    // ASSERT
    expect(onSearchBarSubmit).toHaveBeenCalled();
  });
});