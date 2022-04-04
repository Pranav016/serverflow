import React, { useContext } from 'react';
import { AppContext, commentInterface } from '../../context/AppContext';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import './Post.css';
import { Link } from 'react-router-dom';
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
	const { votePost } = useContext(AppContext);
	return (
		<div className='post-card'>
			<div className='vote'>
				<TiArrowSortedUp onClick={() => votePost(id, true)} />
				<h3>{votes}</h3>
				<TiArrowSortedDown onClick={() => votePost(id, false)} />
			</div>
			<div className='post-info'>
				<h1>{heading}</h1>
				<h5>By {authorEmail}</h5>
				<p>
					{content?.length > 20 ? content.substring(0, 20) : content}
					...
				</p>
				<div className='tags'>
					{tags?.map((tag, index) => (
						<Chip
							key={index}
							label={tag}
							color='primary'
							variant='outlined'
						/>
					))}
				</div>
				<Link to={`${id}`}>
					<Button>Read More</Button>
				</Link>
			</div>
		</div>
	);
};

export default Post;
