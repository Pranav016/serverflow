import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import { AppContext } from '../../context/AppContext';

const SinglePost = () => {
	const { posts, getPosts, setPosts } = useContext(AppContext);
	const navigate = useNavigate();
	const { postId } = useParams();
	useEffect(() => {
		getPosts();
		return () => {
			setPosts([]);
		};
	}, []);

	const handleBack = () => {
		navigate(-1);
	};

	const filteredPost = posts.filter((post) => post.id === postId);

	return (
		<div>
			<Button onClick={handleBack}>Go Back</Button>
			<Post
				id={filteredPost[0]?.id}
				authorEmail={filteredPost[0]?.data?.authorEmail}
				heading={filteredPost[0]?.data?.heading}
				content={filteredPost[0]?.data?.content}
				tags={filteredPost[0]?.data?.tags}
				votes={filteredPost[0]?.data?.votes}></Post>
		</div>
	);
};

export default SinglePost;
