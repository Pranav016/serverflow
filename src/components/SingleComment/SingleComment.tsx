import React, { useContext } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './SingleComment.css';

const SingleComment = ({
	id,
	authorEmail,
	content,
	votes,
}: {
	id: string;
	authorEmail: string;
	content: string;
	votes: number;
	index: number;
}) => {
	const { user, votePost } = useContext(AppContext);
	const navigate = useNavigate();
	return (
		<div className='comment-card'>
			<div className='vote'>
				<TiArrowSortedUp
					onClick={() => {
						if (user) {
							votePost(id, +1);
						} else {
							navigate('/login');
						}
					}}
				/>
				<h3>{votes}</h3>
				<TiArrowSortedDown
					onClick={() => {
						if (user) {
							votePost(id, -1);
						} else {
							navigate('/login');
						}
					}}
				/>
			</div>
			<div className='comment-info'>
				<h5>By {authorEmail}</h5>
				<p>{content}</p>
			</div>
			<hr />
		</div>
	);
};

export default SingleComment;
