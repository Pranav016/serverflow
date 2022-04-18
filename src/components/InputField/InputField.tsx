import { TextField } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { inputFieldProps } from '../../database';
import './InputField.css';

const InputField = ({
	inputText,
	setInputText,
	label,
	buttonText,
	handleClick,
}: inputFieldProps) => {
	return (
		<div className='main'>
			<div className='input-field'>
				<TextField
					id='standard-basic'
					label={label}
					variant='standard'
					onChange={(e) => setInputText(e.target.value)}
					value={inputText}
					multiline
					rows={4}
				/>
			</div>
			<div className='add'>
				<Button onClick={handleClick}>{buttonText}</Button>
			</div>
		</div>
	);
};

export default InputField;
