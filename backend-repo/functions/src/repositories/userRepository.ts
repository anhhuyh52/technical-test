import { db } from '../config/firebaseConfig';

export const updateUserDataInFirestore = async (id: string, data: any): Promise<void> => {
  await db.collection('USERS').doc(id).update(data);
};

export const fetchUserDataFromFirestore = async (id: string): Promise<any> => {
  const userDoc = await db.collection('USERS').doc(id).get();
  return userDoc.exists ? userDoc.data() : null;
};


export const addUserToFirestore = async (data: any): Promise<void> => {
  const entry = db.collection('USERS').doc();
  await db.collection('USERS').doc(entry.id).set(data);
};