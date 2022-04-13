import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import './SinglePost.css';
import SingleComment from '../../components/SingleComment/SingleComment';
import InputField from '../../components/InputField/InputField';
import { commentInterface, postInterface } from '../../database';
import { db } from '../../config/firebaseConfig';
import {
	doc,
	DocumentData,
	onSnapshot,
	DocumentSnapshot,
} from 'firebase/firestore';

const SinglePost = () => {
	const { user, posts, addComment } = useContext(AppContext);
	const { postId } = useParams();
	const navigate = useNavigate();
	const [solution, setSolution] = useState<string>('');
	const [filteredPost, setFilteredPost] = useState<postInterface[]>([]);
	const [comments, setComments] = useState<commentInterface[]>();

	useEffect(() => {
		const unsubscribe = onSnapshot(
			doc(db, 'comments', postId as string),
			(snapshot: DocumentSnapshot<DocumentData>) => {
				const comments = snapshot.data();
				const arr = [];
				for (const key in comments) {
					arr.push(comments[key]);
				}
				setComments(sortComments(arr));
			}
		);
		return () => {
			unsubscribe();
			setComments([]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		setFilteredPost(posts.filter((post) => post.id === postId));
		return () => {
			setFilteredPost(posts);
		};
	}, [posts, postId]);

	function sortComments(arr: commentInterface[]) {
		arr?.sort(
			(a: commentInterface, b: commentInterface): number =>
				b.votes - a.votes
		);
		return arr;
	}
	const handleBack = () => {
		navigate(-1);
	};
	const handleClick = () => {
		if (!user) {
			navigate('/login');
			return;
		}

		if (solution === '') {
			toast.error('Please add text!');
			return;
		}
		const newComment: commentInterface = {
			id: uuidv4(),
			authorEmail: user?.email as string,
			content: solution,
			votes: 0,
		};
		addComment(filteredPost[0]?.id, newComment);
		setSolution('');
	};

	return (
		<div className='singlePostPage'>
			<div className='nested-navbar'>
				<Button onClick={handleBack}>Go Back</Button>
			</div>
			<div className='single-post'>
				<Post
					id={filteredPost[0]?.id}
					authorEmail={filteredPost[0]?.data?.authorEmail}
					heading={filteredPost[0]?.data?.heading}
					content={filteredPost[0]?.data?.content}
					tags={filteredPost[0]?.data?.tags}
					votes={filteredPost[0]?.data?.votes}></Post>
			</div>
			<div className='addPost-input'>
				<InputField
					inputText={solution}
					setInputText={setSolution}
					label='Add Solution'
					handleClick={handleClick}
					buttonText={'Add'}
				/>
			</div>
			<div className='comments-console'>
				{comments?.length
					? comments?.map((comment: commentInterface) => (
							<SingleComment
								key={comment.id}
								postId={postId as string}
								commentId={comment.id}
								authorEmail={comment.authorEmail}
								content={comment.content}
								votes={comment.votes}
							/>
					  ))
					: 'No solutions found!'}
			</div>
		</div>
	);
};

export default SinglePost;
