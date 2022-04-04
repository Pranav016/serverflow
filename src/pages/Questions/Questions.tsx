import { onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import SearchField from '../../components/SearchField/SearchField';
import TagsBar from '../../components/TagsBar/TagsBar';
import { postCollectionRef } from '../../config/firebase.collections';
import { AppContext, postInterface } from '../../context/AppContext';
import tags from '../../lib/tags';
import './Questions.css';

const Questions: React.FC = () => {
	const { posts, setPosts } = useContext(AppContext);
	const [searchText, setSearchText] = useState('');
	const [filteredPosts, setFilteredPosts] = useState<postInterface[]>([]);
	const [notChosenTags, setNotChosenTags] = useState<string[]>(tags);
	const [chosenTags, setChosenTags] = useState<string[]>([]);

	function filterSearch() {
		if (searchText === '') {
			setFilteredPosts(posts);
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
			setFilteredPosts(posts);
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
	}, [searchText, posts]);

	useEffect(() => {
		filterTags();
		return () => {
			setFilteredPosts(posts);
		};
	}, [chosenTags, posts]);

	useEffect(() => {
		const unsubscribe = onSnapshot(postCollectionRef, (snapshot) =>
			setPosts(
				snapshot?.docs?.map((doc) => ({ id: doc.id, data: doc.data() }))
			)
		);
		return () => {
			unsubscribe();
			setPosts([]);
		};
	}, []);

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
	}
	return (
		<div className='questions-console'>
			<SearchField
				searchText={searchText}
				setSearchText={setSearchText}
			/>
			<TagsBar
				chosenTags={chosenTags}
				notChosenTags={notChosenTags}
				handleDeleteTag={handleDeleteTag}
				handleClickTag={handleClickTag}
				clearTagFilters={clearTagFilters}
			/>
			{filteredPosts
				? filteredPosts.map((post) => (
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
				: 'No posts found!'}
		</div>
	);
};

export default Questions;
