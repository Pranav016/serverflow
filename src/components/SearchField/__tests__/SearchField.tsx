import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchField, { searchFieldProps } from '../SearchField';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const MockedSearchField = ({ searchText, setSearchText }: searchFieldProps) => {
	return (
		<BrowserRouter>
			<SearchField
				searchText={searchText}
				setSearchText={setSearchText}
			/>
		</BrowserRouter>
	);
};

describe('Test SearchField component', () => {
	it('Check if component gets correctly rendered', () => {
		render(
			<MockedSearchField searchText='jest' setSearchText={jest.fn()} />
		);
		expect(
			screen.getByRole('button', { name: /add post/i })
		).toBeInTheDocument();
	});
});
