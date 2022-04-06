import React, { useContext } from 'react';
import { AppContext, commentInterface } from '../../context/AppContext';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import './Post.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Chip } from '@mui/material';

export interface localPostInterface {
	id: string;
	authorEmail: string;
	heading: string;
	content: string;
	votes: number;
	tags: string[];
	comments?: commentInterface[];
}

const Post = ({
	id,
	authorEmail,
	heading,
	content,
	votes,
	tags,
	comments,
}: localPostInterface) => {
	const { user, votePost } = useContext(AppContext);
	const { pathname } = useLocation();
	const renderedOnSinglePage = pathname !== '/questions';
	const navigate = useNavigate();
	return (
		<div className='post-card'>
			<div className='vote'>
				<TiArrowSortedUp
					onClick={() => {
						if (user) {
							votePost(id, true);
						} else {
							navigate('/login');
						}
					}}
				/>
				<h3>{votes}</h3>
				<TiArrowSortedDown
					onClick={() => {
						if (user) {
							votePost(id, false);
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
				{!renderedOnSinglePage && (
					<div className='post-footer'>
						<Link to={`${id}`}>
							<Button>Read More</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Post;
