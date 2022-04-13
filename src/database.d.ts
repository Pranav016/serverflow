import { UserCredential } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { SweetAlertIcon } from 'sweetalert2';

// interface commentInterface {
// 	[key: string]: commentInterface;
// }

interface commentInterface {
	id: string;
	authorEmail: string;
	content: string;
	votes: number;
}

interface postInterface {
	id: string;
	data: DocumentData;
}

interface postDataInterface {
	authorEmail: string;
	heading: string;
	content: string;
	votes: number;
	tags: string[];
}

interface sweetAlertWarningInterface {
	id: string;
	title: string;
	text: string;
	icon: SweetAlertIcon;
	showCancelButton: boolean;
	confirmButtonColor: string;
	cancelButtonColor: string;
	confirmButtonText: string;
	msg: string[];
	onConfirm: (id: string) => void;
}

interface contextInterface {
	user: User | null;
	posts: postInterface[];
	signup: (email: string, password: string) => Promise<UserCredential>;
	login: (email: string, password: string) => Promise<UserCredential>;
	logout: () => Promise<void>;
	googleSignIn: () => Promise<UserCredential>;
	resetPassword: (email: string) => Promise<void>;
	getPosts: () => void;
	addPost: (data: postDataInterface) => void;
	updatePostContent: (id: string, content: string) => void;
	addComment: (id: string, comment: commentInterface) => void;
	deletePost: (id: string, pathname: string) => void;
	setPosts: React.Dispatch<React.SetStateAction<postInterface[]>>;
	votePost: (id: string, vote: number) => void;
	voteComment: (commentId: string, postId: string, vote: number) => void;
	sweetAlertWarning: ({
		title,
		text,
		icon,
		showCancelButton,
		confirmButtonColor,
		cancelButtonColor,
		confirmButtonText,
		msg,
	}: sweetAlertWarningInterface) => void;
}

interface HeroPropInterface {
	alternate?: boolean;
	imgPath: string;
	heading: string;
	content: string;
}

interface inputFieldProps {
	inputText: string;
	label: string;
	buttonText: string;
	handleClick: () => void;
	setInputText: React.Dispatch<React.SetStateAction<string>>;
}

interface localPostInterface {
	id: string;
	authorEmail: string;
	heading: string;
	content: string;
	votes: number;
	tags: string[];
	comments?: commentInterface[];
}

interface TagsBarInterface {
	chosenTags: string[];
	notChosenTags: string[];
	handleDeleteTag: (tag: string) => void;
	handleClickTag: (tag: string) => void;
	clearTagFilters: () => void;
	text: string;
}

interface HeroDataInterface {
	imgPath: string[];
	headings: string[];
	content: string[];
}
