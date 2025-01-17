import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import NavBar from '../NavBar/NavBar';

// FILTERDROPDOWN AND INDIVIDUAL FILTERS

describe('FilterDropdown and individual filter functionality', () => {
 it('renders the filter menu upon clicking the show filter button', () => {
    // ARRANGE
     render(
        <Provider store={store}>
            <FilterDropdown />
            <NavBar />
        </Provider>
     );

    // const filterButton = screen.getByLabelText('filter-button');
    const politicsFilter = screen.getByText(/Politics/i);
 
    // ACT 
    userEvent.click(filterButton);

    // ASSERT   
    expect(politicsFilter).toBeInTheDocument();
 });
});