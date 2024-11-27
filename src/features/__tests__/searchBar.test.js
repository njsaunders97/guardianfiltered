import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';

// RENDERING SEARCHBAR

describe("SearchBar rendering", () => {
  it('renders the SearchBar component', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/scour the archives.../i);
    expect(searchInput).toBeInTheDocument();
  });
});

// USER INPUT AND SEARCH SUBMISSION

describe("SearchBar user input changes and submission completes", () => {
  it('updates the SearchBar placeholder value according to user input', () => {
    // ARRANGE
    // Renders SearchBar so it has something to test
    // Finds the targeted element via this particular matcher below
    render(<SearchBar />);
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
    render(<SearchBar onSearchBarSubmit={onSearchBarSubmit} />);
    const searchBarInput = screen.getByPlaceholderText(/scour the archives.../i);
    
    // ACT
    userEvent.type(searchBarInput, '{enter}');

    // ASSERT
    expect(onSearchBarSubmit).toHaveBeenCalled();
  });
});