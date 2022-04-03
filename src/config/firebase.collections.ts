import { collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const postCollectionRef = collection(db, 'posts');
