import React, { useContext } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import { AppContext } from '../../context/AppContext';
import './AddPost.css';

const AddPost = () => {
	const { addPost } = useContext(AppContext);

	return (
		<PostForm
			head={''}
			cont={''}
			taskText={'Submit'}
			ctags={[]}
			fn={addPost}
		/>
	);
};

export default AddPost;
