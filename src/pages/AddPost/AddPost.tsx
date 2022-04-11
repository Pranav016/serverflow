import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AppContext } from '../../context/AppContext';
import tags from '../../lib/tags';
import TagsBar from '../../components/TagsBar/TagsBar';
import { useNavigate } from 'react-router-dom';
import './AddPost.css';
import { postDataInterface } from '../../database';

const AddPost = () => {
	const { user, addPost } = useContext(AppContext);
	const navigate = useNavigate();
	const [chosenTags, setChosenTags] = useState<string[]>([]);
	const [notChosenTags, setNotChosenTags] = useState<string[]>(tags);
	const headingRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLInputElement>(null);
	const handleClickTag = (tag: string) => {
		if (chosenTags.length + 1 > 5) {
			toast.error('Cannot choose more than 5 tags');
			return;
		}
		setNotChosenTags((notChosenTagsLatest) =>
			notChosenTagsLatest.filter((t) => t !== tag)
		);
		setChosenTags((tags) => [...tags, tag]);
	};
	const handleDeleteTag = (tag: string) => {
		setChosenTags((chosenTagsLatest) =>
			chosenTagsLatest.filter((t) => t !== tag)
		);
		setNotChosenTags((tags) => [...tags, tag]);
	};
	const clearTagFilters = () => {
		setChosenTags([]);
		setNotChosenTags(tags);
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const heading: string = headingRef?.current?.value as string;
		const content: string = contentRef?.current?.value as string;
		const authorEmail: string = user?.email as string;
		if (heading === '') {
			toast.error('Please enter a heading!');
			return;
		}
		if (content === '') {
			toast.error('Please enter the content!');
			return;
		}
		if (chosenTags.length !== 5) {
			toast.error('Please choose atleast 5 tags');
			return;
		}
		const data: postDataInterface = {
			authorEmail,
			heading,
			content,
			votes: 0,
			tags: chosenTags,
			comments: null,
		};
		addPost(data);
		navigate('/questions', { replace: true });
	};
	return (
		<div className='addPost-form'>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formGroupHeading'>
					<Form.Label>Post Heading</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter post heading'
						ref={headingRef}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupContent'>
					<Form.Label>Post Content</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter post content'
						ref={contentRef}
					/>
				</Form.Group>
				<TagsBar
					chosenTags={chosenTags}
					notChosenTags={notChosenTags}
					handleClickTag={handleClickTag}
					handleDeleteTag={handleDeleteTag}
					clearTagFilters={clearTagFilters}
					text={'Clear tags'}
				/>
				<hr />
				<Button type='submit'>Submit Post</Button>
			</Form>
		</div>
	);
};

export default AddPost;
