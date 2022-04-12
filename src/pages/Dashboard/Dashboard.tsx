import React, { useContext, useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import { AppContext } from '../../context/AppContext';
import { postInterface } from '../../database';
import './Dashboard.css';

const Dashboard = () => {
	const { user, posts } = useContext(AppContext);
	const [filteredPosts, setFilteredPosts] = useState<postInterface[]>([]);
	useEffect(() => {
		setFilteredPosts(
			posts?.filter((post) => post?.data?.authorEmail === user?.email)
		);
		return () => {
			setFilteredPosts([]);
		};
	}, [posts, user]);

	return (
		<div className='dashboard'>
			<div className='info-box'>
				<h1>My Info</h1>
				<div className='user-box'>
					<div className='user-img'>
						{user?.photoURL ? (
							<img src={user.photoURL} alt='userImage' />
						) : (
							<img
								src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
								alt='userImage'
							/>
						)}
					</div>
					<div className='user-info-text'>
						<span>
							<h5>Email-</h5> {user?.email}
						</span>
						{user?.displayName && (
							<span>
								<h5>Display Name-</h5> {user?.displayName}
							</span>
						)}
						<span>
							<h5>Email is verified-</h5>{' '}
							{user?.emailVerified ? 'Yes' : 'No'}
						</span>
						<span>
							<h5>Account opened-</h5>{' '}
							{user?.metadata?.creationTime}
						</span>
					</div>
				</div>
			</div>
			<div className='info-box'>
				<h1>My Posts</h1>
				<div className='user-posts'>
					{filteredPosts ? (
						filteredPosts?.map((post) => (
							<Post
								key={post?.id}
								id={post?.id}
								authorEmail={post?.data?.authorEmail}
								heading={post?.data?.heading}
								content={post?.data?.content}
								votes={post?.data?.votes}
								tags={post?.data?.tags}
							/>
						))
					) : (
						<p>No posts to be shown!</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
