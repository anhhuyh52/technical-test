import admin from 'firebase-admin';
import * as serviceAccount from '../constants/serviceAccount.json';


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: process.env.DATABASE_URL
});

export const db = admin.firestore();
