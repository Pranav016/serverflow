import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	User,
	UserCredential,
} from 'firebase/auth';
import {
	addDoc,
	deleteDoc,
	doc,
	DocumentData,
	getDocs,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { postCollectionRef } from '../config/firebase.collections';
import { auth, db } from '../config/firebaseConfig';

// typescript interfaces
export interface commentInterface {
	id: string;
	authorEmail: string;
	content: string;
	votes: number;
}

export interface postInterface {
	id: string;
	data: DocumentData;
}

export interface postDataInterface {
	authorEmail: string;
	heading: string;
	content: string;
	votes: number;
	tags: string[];
	comments?: commentInterface[];
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
	addFirstComment: (id: string, comment: commentInterface) => void;
	addComment: (id: string, comment: commentInterface) => void;
	deletePost: (id: string) => void;
	setPosts: React.Dispatch<React.SetStateAction<postInterface[]>>;
	votePost: (id: string, vote: boolean) => void;
}

export const AppContext = createContext({} as contextInterface);

export default function AppProvider({
	children,
}: React.HTMLAttributes<Element>) {
	const [user, setUser] = useState<User | null>(null);
	const [posts, setPosts] = useState<postInterface[]>([]);

	// auth functions
	function signup(email: string, password: string) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	function login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	function logout() {
		return signOut(auth);
	}
	function googleSignIn() {
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider);
	}
	function resetPassword(email: string) {
		return sendPasswordResetEmail(auth, email);
	}
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
			// console.log(user);
			setUser(user);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// post database functions
	function getPosts() {
		getDocs(postCollectionRef)
			.then((res) =>
				res?.docs?.map((doc) => ({ id: doc.id, data: doc.data() }))
			)
			.then((postsList) => setPosts(postsList))
			.catch((err) => console.log(err));
	}
	function addPost(post: postDataInterface) {
		addDoc(postCollectionRef, post)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}
	function updatePostContent(id: string, content: string) {
		const docRef = doc(db, 'posts', id);
		updateDoc(docRef, { content }).catch((err) =>
			console.log((err as Error).message)
		);
	}
	function votePost(id: string, vote: boolean) {
		const docRef = doc(db, 'posts', id);
		const reqPost = posts.filter((post) => post.id === id);
		const updatedVotes = reqPost[0]?.data?.votes + (vote ? 1 : -1);
		updateDoc(docRef, { votes: updatedVotes }).catch((err) =>
			console.log((err as Error).message)
		);
	}
	// function upvoteComment(id:string, post: postDataInterface, vote: boolean) {
	// 	const reqComment = post?.comments?.filter(
	// 		(comment: commentInterface) => comment.id === id
	// 	);
	// 	const updatedVotes = reqComment[0]?.votes + (vote ? 1 : -1);
	// 	const updatedComment = { ...reqComment, votes: updatedVotes };
	// 	updateDoc(docRef, {comments:[{id: id, votes: updatedVotes}]).catch((err) =>
	// 		console.log((err as Error).message)
	// 	);
	// }
	function addFirstComment(id: string, comment: commentInterface) {
		const docRef = doc(db, 'posts', id);
		const reqPost = posts.filter((post) => post.id === id);
		const updatedPost = { ...reqPost[0], comments: [comment] };
		setDoc(docRef, updatedPost).catch((err) =>
			console.log((err as Error).message)
		);
	}
	function addComment(id: string, comment: commentInterface) {
		const docRef = doc(db, 'posts', id);
		const reqPost = posts.filter((post) => post.id === id);
		const updatedComments: string[] = [
			...reqPost[0].data.comments,
			comment,
		];
		updateDoc(docRef, { comments: updatedComments }).catch((err) =>
			console.log((err as Error).message)
		);
	}
	function deletePost(id: string) {
		const docRef = doc(db, 'posts', id);
		deleteDoc(docRef).catch((err) => (err as Error).message);
	}

	const value: contextInterface = {
		user,
		posts,
		signup,
		login,
		logout,
		googleSignIn,
		resetPassword,
		getPosts,
		addPost,
		updatePostContent,
		addFirstComment,
		addComment,
		deletePost,
		setPosts,
		votePost,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
