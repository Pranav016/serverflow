import { TextField } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import './SearchField.css';

export interface searchFieldProps {
	inputText: string;
	label: string;
	buttonText: string;
	handleClick: () => void;
	setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField = ({
	inputText,
	setInputText,
	label,
	buttonText,
	handleClick,
}: searchFieldProps) => {
	return (
		<div className='main'>
			<div className='input-field'>
				<TextField
					id='standard-basic'
					label={label}
					variant='standard'
					onChange={(e) => setInputText(e.target.value)}
					value={inputText}
				/>
			</div>
			<div className='add-post'>
				<Button onClick={handleClick}>{buttonText}</Button>
			</div>
		</div>
	);
};

export default SearchField;
