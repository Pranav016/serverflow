import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from '../InputField';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { inputFieldProps } from '../../../database';

const MockedInputField = ({
	inputText,
	setInputText,
	label,
	buttonText,
	handleClick,
}: inputFieldProps) => {
	return (
		<BrowserRouter>
			<InputField
				inputText={inputText}
				setInputText={setInputText}
				label={label}
				buttonText={buttonText}
				handleClick={handleClick}
			/>
		</BrowserRouter>
	);
};

describe('Test InputField component', () => {
	it('Check if component gets correctly rendered', () => {
		render(
			<MockedInputField
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
