import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	User,
} from 'firebase/auth';
import {
	addDoc,
	arrayUnion,
	deleteDoc,
	doc,
	DocumentData,
	getDocs,
	increment,
	onSnapshot,
	QuerySnapshot,
	// setDoc,
	updateDoc,
} from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { postCollectionRef } from '../config/firebase.collections';
import auth, { db } from '../config/firebaseConfig';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {
	commentInterface,
	contextInterface,
	postDataInterface,
	postInterface,
	sweetAlertWarningInterface,
} from '../database';

export const AppContext = createContext({} as contextInterface);

export default function AppProvider({
	children,
}: React.HTMLAttributes<Element>) {
	const [user, setUser] = useState<User | null>(null);
	const [posts, setPosts] = useState<postInterface[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onSnapshot(
			postCollectionRef,
			(snapshot: QuerySnapshot<DocumentData>) =>
				setPosts(
					snapshot?.docs?.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
		);
		return () => {
			unsubscribe();
			setPosts([]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
			.catch((err) => toast.error(err.message));
	}
	function addPost(post: postDataInterface) {
		addDoc(postCollectionRef, post)
			.then(() => toast.success('Posted successfully!'))
			.catch((err) => toast.error(err.message));
	}
	function updatePostContent(id: string, content: string) {
		const docRef = doc(db, 'posts', id);
		updateDoc(docRef, { content }).catch((err) =>
			toast.error((err as Error).message)
		);
	}
	function votePost(id: string, vote: number) {
		const docRef = doc(db, 'posts', id);
		updateDoc(docRef, { votes: increment(vote) }).catch((err) =>
			toast.error((err as Error).message)
		);
	}
	// function voteComment(id: string, vote: number, index: number) {
	// 	const docRef = doc(db, 'posts', id);
	// 	updateDoc(docRef, {[`comments[${index}].votes: ${increment(vote)}`]}).catch(
	// 		(err) => console.log((err as Error).message)
	// 	);
	// }
	function addComment(id: string, comment: commentInterface) {
		const docRef = doc(db, 'posts', id);
		updateDoc(docRef, { comments: arrayUnion(comment) })
			.then(() => toast.success('Added Comment!'))
			.catch((err) => toast.error((err as Error).message));
	}
	function deletePost(pathname: string, id: string) {
		const docRef = doc(db, 'posts', id);
		console.log(id, pathname);

		deleteDoc(docRef)
			.then(() => {
				navigate(pathname);
			})
			.catch((err) => toast.error((err as Error).message));
	}

	function sweetAlertWarning({
		id,
		title,
		text,
		icon,
		showCancelButton,
		confirmButtonColor,
		cancelButtonColor,
		confirmButtonText,
		msg,
		onConfirm,
	}: sweetAlertWarningInterface) {
		Swal.fire({
			title,
			text,
			icon,
			showCancelButton,
			confirmButtonColor,
			cancelButtonColor,
			confirmButtonText,
		})
			.then((result) => {
				if (result?.isConfirmed) {
					try {
						onConfirm(id);
						Swal.fire(...msg);
					} catch (err) {
						toast.error((err as Error).message);
					}
				}
			})
			.catch((err) => toast.error(err.message));
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
		// addFirstComment,
		addComment,
		deletePost,
		setPosts,
		votePost,
		// voteComment,
		sweetAlertWarning,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
