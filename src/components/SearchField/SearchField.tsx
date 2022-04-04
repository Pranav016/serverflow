import { TextField } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SearchField.css';

export interface searchFieldProps {
	searchText: string;
	setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField = ({ searchText, setSearchText }: searchFieldProps) => {
	return (
		<div className='main'>
			<div className='search-field'>
				<TextField
					id='standard-basic'
					label='Search-Posts'
					variant='standard'
					onChange={(e) => setSearchText(e.target.value)}
					value={searchText}
				/>
			</div>
			<div className='add-post'>
				<Link to='/add-post'>
					<Button>Add Post</Button>
				</Link>
			</div>
		</div>
	);
};

export default SearchField;
