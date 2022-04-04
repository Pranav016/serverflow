import { Chip } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

export interface TagsBarInterface {
	chosenTags: string[];
	notChosenTags: string[];
	handleDeleteTag: (tag: string) => void;
	handleClickTag: (tag: string) => void;
	clearTagFilters: () => void;
}

const TagsBar = ({
	chosenTags,
	notChosenTags,
	handleDeleteTag,
	handleClickTag,
	clearTagFilters,
}: TagsBarInterface) => {
	return (
		<div className='tags-bar'>
			{chosenTags &&
				chosenTags.map((tag, index) => (
					<Chip
						key={index}
						label={tag}
						color='success'
						variant='outlined'
						onDelete={() => handleDeleteTag(tag)}
					/>
				))}
			{notChosenTags &&
				notChosenTags.map((tag, index) => (
					<Chip
						key={index}
						label={tag}
						color='primary'
						variant='outlined'
						onClick={() => handleClickTag(tag)}
					/>
				))}
			<Button onClick={clearTagFilters}>Clear filters</Button>
		</div>
	);
};

export default TagsBar;
