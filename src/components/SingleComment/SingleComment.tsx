import React, { useContext } from 'react';
import { RiDeleteBinFill, RiEditBoxFill } from 'react-icons/ri';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './SingleComment.css';
import ReactMarkdown from 'react-markdown';

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
			<div className='comment-header'>
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
				</div>
			</div>
			<div className='comment-content'>
				<ReactMarkdown skipHtml={true} linkTarget={'_blank '}>
					{content}
				</ReactMarkdown>
			</div>
			<div className='comment-footer'>
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
		</div>
	);
};

export default SingleComment;
