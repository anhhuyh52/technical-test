import { updateUserData, fetchUserData ,addUser} from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';
import { Router } from 'express';

const router: Router = Router();

router.post('/update-user-data', authMiddleware, updateUserData);
router.get('/fetch-user-data/:id', authMiddleware, fetchUserData);
router.post('/add-user', addUser);

export const UserRoutes: Router = router;
