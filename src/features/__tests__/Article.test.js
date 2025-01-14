import { Provider } from 'react-redux';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../app/store';
import Article from '../Article/Article';
import SearchBar from '../SearchBar/SearchBar';

describe("Article rendering", () => {
    it("renders if the user types in a query", () => {
        // ARRANGE
        const onSearchBarSubmit = jest.fn();
        const mockArticle = {
            commentCount: 5,
            webTitle: 'test',
            author: 'test-author',
            articleContent: 'Test article'
        };
        render(
            <Provider store={store}>
                <Article article={mockArticle}/>
                <SearchBar onSearchBarSubmit={onSearchBarSubmit} />
            </Provider>
        );
        const searchBarInput = screen.getByPlaceholderText(/Scour the archives.../i);

        // ACT 
        userEvent.type(searchBarInput, 'test');
        userEvent.type(searchBarInput, '{enter}');

        // ASSERT
        expect(screen.getByText('Test article')).toBeInTheDocument();
    })
});
