import { Chip } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import './TagsBar.css';

export interface TagsBarInterface {
	chosenTags: string[];
	notChosenTags: string[];
	handleDeleteTag: (tag: string) => void;
	handleClickTag: (tag: string) => void;
	clearTagFilters: () => void;
	text: string;
}

const TagsBar = ({
	chosenTags,
	notChosenTags,
	handleDeleteTag,
	handleClickTag,
	clearTagFilters,
	text,
}: TagsBarInterface) => {
	return (
		<div className='tags-bar'>
			<div className='tags'>
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
			</div>
			<div>
				<Button onClick={clearTagFilters}>{text}</Button>
			</div>
		</div>
	);
};

export default TagsBar;
