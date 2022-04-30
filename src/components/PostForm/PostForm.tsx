import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import tags from '../../lib/tags';
import toast from 'react-hot-toast';
import TagsBar from '../TagsBar/TagsBar';
import { postDataInterface, PostFormProps } from '../../database';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './PostForm.css';
import TabsBar from '../TabsBar/TabsBar';
import ReactMarkdown from 'react-markdown';

const PostForm = ({
	head,
	cont,
	postId,
	taskText,
	ctags,
	fn,
}: PostFormProps) => {
	const { user } = useContext(AppContext);
	const navigate = useNavigate();
	const [heading, setHeading] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [chosenTags, setChosenTags] = useState<string[]>([]);
	const [notChosenTags, setNotChosenTags] = useState<string[]>(tags);
	const [isloading, setIsLoading] = useState(true);

	useEffect(() => {
		setChosenTags(ctags);
		setHeading(head);
		setContent(cont);
		ctags?.map((tag) =>
			setNotChosenTags((notChosenTagsLatest) =>
				notChosenTagsLatest.filter((t) => t !== tag)
			)
		);
		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ctags, head, cont]);

	const handleClickTag = (tag: string) => {
		if (chosenTags?.length + 1 > 5) {
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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const authorEmail: string = user?.email as string;
		if (heading === '') {
			toast.error('Please enter a heading!');
			return;
		}
		if (content === '') {
			toast.error('Please enter the content!');
			return;
		}
		if (chosenTags.length < 5) {
			toast.error('Please choose atleast 5 tags');
			return;
		} else if (chosenTags.length > 5) {
			toast.error('Cannot choose more than 5 tags');
			return;
		}
		if (!postId) {
			const data: postDataInterface = {
				authorEmail,
				heading,
				content,
				votes: 0,
				tags: chosenTags,
			};
			fn(data);
		} else {
			const data = { heading, content, tags: chosenTags };
			fn(postId, data);
		}
		navigate('/questions', { replace: true });
	};
	return (
		<div className='post-form'>
			{!isloading && (
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formGroupHeading'>
						<Form.Label>Post Heading</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter post heading'
							value={heading}
							onChange={(e) => setHeading(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formGroupContent'>
						<Form.Label>
							Post Content
							<span>
								{' '}
								(Markdown format is supported:{' '}
								<a href='https://www.markdownguide.org/basic-syntax/'>
									Learn More
								</a>
								)
							</span>
						</Form.Label>
						<TabsBar
							defaultActive='Code'
							items={['Code', 'Preview']}
							elements={[
								<Form.Control
									key={0}
									type='text'
									placeholder='Enter post content'
									value={content}
									onChange={(e) => setContent(e.target.value)}
									as='textarea'
									rows={6}
								/>,

								<ReactMarkdown
									key={1}
									skipHtml={true}
									linkTarget={'_blank '}>
									{content}
								</ReactMarkdown>,
							]}
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
					<Button type='submit'>{taskText} Post</Button>
				</Form>
			)}
		</div>
	);
};

export default PostForm;
