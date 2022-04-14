import { UserCredential } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { SweetAlertIcon } from 'sweetalert2';

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

interface sweetAlertPostWarningInterface {
	postId: string;
	pathname: string;
	title?: string;
	text?: string;
	icon?: SweetAlertIcon;
	showCancelButton?: boolean;
	confirmButtonColor?: string;
	cancelButtonColor?: string;
	confirmButtonText?: string;
	msg?: string[];
}

interface sweetAlertCommentWarningInterface {
	postId: string;
	commentId: string;
	title?: string;
	text?: string;
	icon?: SweetAlertIcon;
	showCancelButton?: boolean;
	confirmButtonColor?: string;
	cancelButtonColor?: string;
	confirmButtonText?: string;
	msg?: string[];
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
	getPost: (
		postId: string,
		setPostData: React.Dispatch<
			React.SetStateAction<DocumentData | undefined>
		>
	) => void;
	addPost: (data: postDataInterface) => void;
	updatePost: (
		postId: string,
		data: { heading: string; content: string; tags: string[] }
	) => void;
	addComment: (postId: string, comment: commentInterface) => void;
	deletePost: ({ postId: string, pathname: string }) => void;
	setPosts: React.Dispatch<React.SetStateAction<postInterface[]>>;
	votePost: (postId: string, vote: number) => void;
	voteComment: (commentId: string, postId: string, vote: number) => void;
	deleteSpecificComment: (commentId: string, postId: string) => void;
	sweetAlertPostWarning: ({
		postId,
		pathname,
		title,
		text,
		icon,
		showCancelButton,
		confirmButtonColor,
		cancelButtonColor,
		confirmButtonText,
		msg,
	}: sweetAlertPostWarningInterface) => void;
	sweetAlertCommentWarning: ({
		postId,
		commentId,
		title,
		text,
		icon,
		showCancelButton,
		confirmButtonColor,
		cancelButtonColor,
		confirmButtonText,
		msg,
	}: sweetAlertCommentWarningInterface) => void;
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

interface PostFormProps {
	head: string;
	cont: string;
	postId?: string;
	taskText: string;
	ctags: string[];
	fn: (...args: any[]) => void;
}
