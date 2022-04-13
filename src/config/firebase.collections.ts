import { collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const postCollectionRef = collection(db, 'posts');
export const commentCollectionRef = collection(db, 'comments');
