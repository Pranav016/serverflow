import { DocumentData } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../../components/PostForm/PostForm';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';
import { AppContext } from '../../context/AppContext';

const UpdatePost = () => {
	const { postId } = useParams();
	const { updatePost, getPost } = useContext(AppContext);
	const [postData, setPostData] = useState<DocumentData | undefined>();
	useEffect(() => {
		getPost(postId as string, setPostData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId]);

	function updationForm() {
		return (
			<PostForm
				head={postData?.heading}
				cont={postData?.content}
				taskText={'Update'}
				postId={postId}
				ctags={postData?.tags}
				fn={updatePost}
			/>
		);
	}

	return postData ? (
		<div className='update-post'>{updationForm()}</div>
	) : (
		<LoadingSpinner />
	);
};

export default UpdatePost;
