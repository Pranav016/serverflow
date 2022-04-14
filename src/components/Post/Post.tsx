import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import './Post.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Chip } from '@mui/material';
import { RiDeleteBinFill, RiEditBoxFill } from 'react-icons/ri';
import { localPostInterface } from '../../database';

const Post = ({
	id,
	authorEmail,
	heading,
	content,
	votes,
	tags,
}: localPostInterface) => {
	const { user, votePost, sweetAlertPostWarning } = useContext(AppContext);
	const { pathname } = useLocation();
	const renderedOnSinglePage = pathname !== '/questions';
	const navigate = useNavigate();
	return (
		<div className='post-card'>
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
			<div className='post-info'>
				<h2>{heading}</h2>
				<h5>By {authorEmail}</h5>
				<p>
					{content?.length > 20 && !renderedOnSinglePage
						? content.substring(0, 20) + '...'
						: content}
				</p>
				<div className='post-tags'>
					{tags?.map((tag, index) => (
						<Chip
							key={index}
							label={tag}
							color='primary'
							variant='outlined'
						/>
					))}
				</div>
				<div className='post-footer'>
					<div>
						{!renderedOnSinglePage && (
							<Link to={`${id}`}>
								<Button>Read More</Button>
							</Link>
						)}
					</div>
					<div>
						{user?.email === authorEmail && (
							<>
								<RiEditBoxFill
									onClick={() =>
										navigate(`/update-post/${id}`)
									}
								/>
								<RiDeleteBinFill
									onClick={() =>
										sweetAlertPostWarning({
											postId: id,
											pathname: renderedOnSinglePage
												? 'questions'
												: pathname,
										})
									}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
