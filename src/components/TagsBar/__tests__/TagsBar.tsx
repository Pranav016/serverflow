import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TagsBar from '../TagsBar';

describe('Test TagsBar component', () => {
	it('Check if component gets correctly rendered', () => {
		render(
			<TagsBar
				chosenTags={['c#']}
				notChosenTags={['python', 'js', 'cpp']}
				handleDeleteTag={jest.fn()}
				handleClickTag={jest.fn()}
				clearTagFilters={jest.fn()}
			/>
		);
		expect(screen.getByText(/cpp/i)).toBeInTheDocument();
		expect(screen.getByText(/c#/i)).toBeInTheDocument();
	});
});
