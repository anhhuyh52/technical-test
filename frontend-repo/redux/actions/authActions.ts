import { Dispatch } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { loginRequest, loginSuccess, loginFailure, logout } from '../slices/authSlice';

// Sign In Action
export const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(loginRequest());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};

// Sign Out Action
export const signOutUser = () => async (dispatch: Dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error: any) {
    console.error('Sign out error:', error.message);
  }
};
