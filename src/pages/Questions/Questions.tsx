import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
import InputField from '../../components/InputField/InputField';
import TagsBar from '../../components/TagsBar/TagsBar';
import { AppContext } from '../../context/AppContext';
import tags from '../../lib/tags';
import './Questions.css';
import { postInterface } from '../../database';

const Questions: React.FC = () => {
	const { posts } = useContext(AppContext);
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();
	const [filteredPosts, setFilteredPosts] = useState<postInterface[]>([]);
	const [notChosenTags, setNotChosenTags] = useState<string[]>(tags);
	const [chosenTags, setChosenTags] = useState<string[]>([]);

	useEffect(() => {
		setFilteredPosts(posts);
		return () => {
			setFilteredPosts([]);
		};
	}, [posts]);

	function filterSearch() {
		if (searchText === '') {
			setFilteredPosts((filteredPostsLatest) =>
				filteredPostsLatest ? filteredPostsLatest : posts
			);
			return;
		}
		setFilteredPosts((filteredPostsLatest) =>
			filteredPostsLatest.filter(
				(post) =>
					post.data.heading
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					post.data.content
						.toLowerCase()
						.includes(searchText.toLowerCase())
			)
		);
	}

	function filterTags() {
		if (chosenTags.length === 0) {
			setFilteredPosts((filteredPostsLatest) =>
				filteredPostsLatest ? filteredPostsLatest : posts
			);
			return;
		}
		setFilteredPosts((filteredPostsLatest) =>
			filteredPostsLatest.filter((post) => {
				const len: number = chosenTags.filter((tag) =>
					post.data.tags.includes(tag)
				).length;
				if (len === chosenTags.length) return true;
				else return false;
			})
		);
	}

	useEffect(() => {
		filterSearch();
		return () => {
			setFilteredPosts(posts);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText, posts]);

	useEffect(() => {
		filterTags();
		return () => {
			setFilteredPosts(posts);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chosenTags, posts]);

	// tag functionalities
	function handleDeleteTag(tag: string) {
		setChosenTags((chosenTagsLatest) =>
			chosenTagsLatest.filter((t) => t !== tag)
		);
		setNotChosenTags((tags) => [...tags, tag]);
	}

	function handleClickTag(tag: string) {
		setNotChosenTags((notChosenTagsLatest) =>
			notChosenTagsLatest.filter((t) => t !== tag)
		);
		setChosenTags((tags: string[]) => [...tags, tag]);
	}

	function clearTagFilters() {
		setChosenTags([]);
		setNotChosenTags(tags);
		setSearchText('');
	}
	return (
		<div className='questions-console'>
			<InputField
				inputText={searchText}
				setInputText={setSearchText}
				label={'Search-Posts'}
				buttonText={'Add Post'}
				handleClick={() => navigate('/add-post')}
			/>
			<TagsBar
				chosenTags={chosenTags}
				notChosenTags={notChosenTags}
				handleDeleteTag={handleDeleteTag}
				handleClickTag={handleClickTag}
				clearTagFilters={clearTagFilters}
				text={'Clear Filters'}
			/>
			{filteredPosts.length ? (
				filteredPosts.map((post) => (
					<Post
						key={post.id}
						id={post.id}
						authorEmail={post.data.authorEmail}
						heading={post.data.heading}
						content={post.data.content}
						tags={post.data.tags}
						votes={post.data.votes}
					/>
				))
			) : (
				<p className='no-post'>No posts found!</p>
			)}
		</div>
	);
};

export default Questions;
