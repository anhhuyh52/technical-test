import { Request, Response } from 'express';
import { updateUserDataInFirestore, fetchUserDataFromFirestore ,addUserToFirestore} from '../repositories/userRepository';

export const updateUserData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, data } = req.body;
    await updateUserDataInFirestore(id, data);
    res.status(200).send({ message: 'User data updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating user data', error });
  }
};  

export const fetchUserData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userData = await fetchUserDataFromFirestore(id);
    if (!userData) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.status(200).send(userData);
    }
  } catch (error) {
    res.status(500).send({ message: 'Error fetching user data', error });
  }
};


export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const  data  = req.body;    
    await addUserToFirestore(data);
    res.status(201).send({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error adding user', error });
  }
};