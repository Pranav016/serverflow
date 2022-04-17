import React, { useContext } from 'react';
import { RiDeleteBinFill, RiEditBoxFill } from 'react-icons/ri';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './SingleComment.css';

const SingleComment = ({
	commentId,
	postId,
	authorEmail,
	content,
	votes,
}: {
	commentId: string;
	postId: string;
	authorEmail: string;
	content: string;
	votes: number;
}) => {
	const {
		user,
		voteComment,
		sweetAlertCommentWarning,
		sweetAlertUpdateComment,
	} = useContext(AppContext);
	const navigate = useNavigate();
	return (
		<div className='comment-card'>
			<div className='vote'>
				<TiArrowSortedUp
					onClick={() => {
						if (user) {
							voteComment(commentId, postId, +1);
						} else {
							navigate('/login');
						}
					}}
				/>
				<h3>{votes}</h3>
				<TiArrowSortedDown
					onClick={() => {
						if (user) {
							voteComment(commentId, postId, -1);
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
			{user?.email === authorEmail && (
				<>
					<RiEditBoxFill
						onClick={() =>
							sweetAlertUpdateComment(postId, commentId)
						}
					/>
					<RiDeleteBinFill
						onClick={() =>
							sweetAlertCommentWarning({
								postId,
								commentId,
							})
						}
					/>
				</>
			)}
			<hr />
		</div>
	);
};

export default SingleComment;
