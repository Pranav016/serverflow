import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchField, { searchFieldProps } from '../SearchField';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const MockedSearchField = ({
	inputText,
	setInputText,
	label,
	buttonText,
	handleClick,
}: searchFieldProps) => {
	return (
		<BrowserRouter>
			<SearchField
				inputText={inputText}
				setInputText={setInputText}
				label={label}
				buttonText={buttonText}
				handleClick={handleClick}
			/>
		</BrowserRouter>
	);
};

describe('Test SearchField component', () => {
	it('Check if component gets correctly rendered', () => {
		render(
			<MockedSearchField
				inputText='jest'
				setInputText={jest.fn()}
				label='search'
				buttonText='Search'
				handleClick={jest.fn()}
			/>
		);
		expect(
			screen.getByRole('button', { name: /search/i })
		).toBeInTheDocument();
	});
});
