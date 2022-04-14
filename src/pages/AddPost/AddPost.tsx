import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './AddPost.css';
import PostForm from '../../components/PostForm/PostForm';

const AddPost = () => {
	const { addPost } = useContext(AppContext);
	const [heading, setHeading] = useState('');
	const [content, setContent] = useState('');

	return (
		<div className='addPost-form'>
			<PostForm
				heading={heading}
				content={content}
				setHeading={setHeading}
				setContent={setContent}
				fn={addPost}
			/>
		</div>
	);
};

export default AddPost;
